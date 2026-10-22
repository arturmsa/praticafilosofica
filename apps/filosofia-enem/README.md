# Filosofia no ENEM

Site de estudo com o ranking dos filósofos mais cobrados no ENEM (2005 a 2025) e as questões de cada um (47 filósofos e correntes, 152 questões), com as palavras-chave marcadas no texto, na referência e nas alternativas.

No ranking, clique no nome de um filósofo: as questões dele abrem logo abaixo, uma seção por vez. O endereço muda para `#descartes`, `#kant` etc., então dá para mandar o link direto de um filósofo para a turma.

## Como ler as marcações

| Marca | Onde aparece | O que indica |
| --- | --- | --- |
| Amarelo | texto-fonte | palavra-chave que a resposta vai reescrever |
| Azul | referência | obra de onde o texto foi tirado |
| Verde | alternativa correta | a mesma ideia do texto, com outras palavras |
| Sublinhado vermelho | alternativas erradas | a palavra que derruba a alternativa |

Ao lado direito de cada questão, a coluna mostra primeiro só as palavras-chave do filósofo (as mesmas do ranking). Logo abaixo, o botão **Mostrar palavras no texto** acende as marcações na questão e abre a lista das palavras do texto, da referência, da resposta certa e das armadilhas.

O botão **Modo treino** esconde as respostas: o aluno clica numa alternativa e o site mostra se acertou, com a explicação.

## Onde fica publicado

Esta pasta faz parte do site **Prática Filosófica** (repositório `arturmsa/praticafilosofica`), em `apps/filosofia-enem/`. Com o GitHub Pages ativo no repositório, o endereço é:

https://arturmsa.github.io/praticafilosofica/apps/filosofia-enem/

O cartão "Filosofia no ENEM" na página inicial do site leva até aqui. Não precisa instalar nada: é HTML, CSS e JavaScript.

## Arquivos

```
index.html          página
assets/estilo.css   visual
assets/app.js       monta o ranking, as questões e o modo treino
dados/ranking.js    ranking de recorrência
dados/questoes.js          as questões de Aristóteles e Platão, com as marcações
dados/questoes-outros.js   as questões dos demais filósofos, no mesmo formato
```

## Como acrescentar uma questão

Abra `dados/questoes.js` e copie um bloco existente. Nas frases:

- `{palavra}` marca uma palavra-chave (amarelo no texto, verde na alternativa correta);
- `~palavra~` marca a armadilha numa alternativa errada.

Os conceitos essenciais de cada autor ficam em `dados/conceitos.js`.

```js
{
  id: "a-2026-exemplo",
  filosofos: ["aristoteles"],          // ou ["platao"], ou os dois
  prova: "ENEM 2026",
  temas: ["Bem comum"],                // viram os filtros da seção
  textos: [{
    t: `Texto com uma {palavra-chave} marcada.`,
    ref: { autor: "ARISTÓTELES.", obra: "Política", resto: ". Editora, ano." }
  }],
  enunciado: "Enunciado da questão",
  alts: [
    { l: "A", t: "alternativa com ~armadilha~.", nota: "Por que está errada." },
    { l: "B", t: "alternativa {correta}.", ok: true }
  ],
  ponte: "Como a palavra do texto leva à resposta."
}
```

Cada filósofo tem um `id` em `dados/ranking.js` (por exemplo `descartes`). Para uma questão aparecer na seção dele, coloque esse id em `filosofos`. Uma questão pode ter mais de um filósofo, como `["hobbes", "rousseau"]`.

## Gabaritos

Seguem as respostas oficiais do INEP. Na questão de Platão do ENEM 2025, o gabarito oficial é **E** (ética e exercício do poder), embora alguns sites marquem D.
