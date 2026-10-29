// Arquivo Digital: ponte entre a planilha e o site Prática Filosófica (versão 2)
// Ler (doGet) é livre. Adicionar, editar e excluir (doPost) exigem a senha
// guardada em Configurações do projeto > Propriedades do script > SENHA.

const ABA = 'Alunos';

// ---------- LER ----------
function doGet() {
  const aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA);
  if (!aba) return resposta({ erro: 'Aba "' + ABA + '" não encontrada' });

  const trava = LockService.getScriptLock();
  if (trava.tryLock(10000)) { try { garantirIds(aba); } finally { trava.releaseLock(); } }

  const valores = aba.getDataRange().getDisplayValues();
  const titulos = valores.shift();
  const alunos = valores
    .filter(linha => linha.some(celula => celula !== ''))
    .map(linha => Object.fromEntries(titulos.map((t, i) => [t, linha[i]])));

  return resposta({ atualizado: new Date().toISOString(), total: alunos.length, alunos });
}

// ---------- ADICIONAR, EDITAR, EXCLUIR ----------
function doPost(e) {
  const trava = LockService.getScriptLock();
  trava.waitLock(20000);
  try {
    const pedido = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    const senha = PropertiesService.getScriptProperties().getProperty('SENHA');
    if (!senha) return resposta({ erro: 'A senha ainda não foi configurada no Apps Script.' });
    if (pedido.senha !== senha) { Utilities.sleep(1500); return resposta({ erro: 'Senha incorreta.' }); }

    const aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ABA);
    if (!aba) return resposta({ erro: 'Aba "' + ABA + '" não encontrada' });
    garantirIds(aba);
    const titulos = aba.getRange(1, 1, 1, aba.getLastColumn()).getValues()[0];
    const dados = pedido.dados || {};

    if (pedido.acao === 'verificar') return resposta({ ok: true });

    if (pedido.acao === 'adicionar') {
      const id = Utilities.getUuid();
      aba.appendRow(titulos.map(t => t === 'ID' ? id : limpar(dados[t])));
      return resposta({ ok: true, id });
    }

    if (pedido.acao === 'editar' || pedido.acao === 'excluir') {
      const n = acharLinha(aba, pedido.id);
      if (!n) return resposta({ erro: 'Registro não encontrado. Clique em Atualizar e tente de novo.' });

      if (pedido.acao === 'excluir') {
        aba.deleteRow(n);
        return resposta({ ok: true });
      }
      const faixa = aba.getRange(n, 1, 1, titulos.length);
      const atual = faixa.getValues()[0];
      faixa.setValues([titulos.map((t, i) => (t === 'ID' || !(t in dados)) ? atual[i] : limpar(dados[t]))]);
      return resposta({ ok: true });
    }

    return resposta({ erro: 'Ação desconhecida.' });
  } catch (erro) {
    return resposta({ erro: String(erro) });
  } finally {
    trava.releaseLock();
  }
}

// ---------- AUXILIARES ----------
// Cria a coluna ID (identificador único de cada linha) e preenche as que estiverem vazias
function garantirIds(aba) {
  if (aba.getLastRow() < 1) return;
  let titulos = aba.getRange(1, 1, 1, aba.getLastColumn()).getValues()[0];
  if (titulos[0] !== 'ID') { aba.insertColumnBefore(1); aba.getRange(1, 1).setValue('ID'); }
  const total = aba.getLastRow() - 1;
  if (total < 1) return;
  const faixa = aba.getRange(2, 1, total, 1);
  const ids = faixa.getValues();
  let mudou = false;
  ids.forEach(l => { if (!l[0]) { l[0] = Utilities.getUuid(); mudou = true; } });
  if (mudou) faixa.setValues(ids);
}

function acharLinha(aba, id) {
  if (!id || aba.getLastRow() < 2) return 0;
  const ids = aba.getRange(2, 1, aba.getLastRow() - 1, 1).getValues();
  const i = ids.findIndex(l => l[0] === id);
  return i < 0 ? 0 : i + 2;
}

// Evita textos gigantes e fórmulas digitadas no site (ex.: =IMPORTXML)
function limpar(v) {
  let s = String(v == null ? '' : v).trim().slice(0, 200);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function resposta(dados) {
  return ContentService.createTextOutput(JSON.stringify(dados))
    .setMimeType(ContentService.MimeType.JSON);
}
