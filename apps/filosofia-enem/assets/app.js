(function () {
  "use strict";

  var QUESTOES = window.QUESTOES || [];
  var RANKING = window.RANKING || [];
  var UNICOS = window.UNICOS || [];

  /* ---------- filósofos: ranking + autores com uma questão ---------- */
  var FILOSOFOS = RANKING.map(function (r) {
    return { id: r.id, nome: r.nome, n: r.n, nota: r.nota, obras: r.obras, palavras: r.palavras, fio: r.fio };
  }).concat(UNICOS.map(function (u) {
    return { id: u[0], nome: u[1], n: 1, obras: u[3], palavras: [u[2]], unico: true };
  }));
  var POR_ID = {};
  FILOSOFOS.forEach(function (f, i) { f.ordem = i; POR_ID[f.id] = f; });

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // {palavra} = palavra-chave; ~palavra~ = armadilha
  function marcar(s, correta) {
    return esc(s)
      .replace(/\{([^}]+)\}/g, function (_, m) {
        return '<mark class="' + (correta ? "mk-ok" : "mk") + '">' + m + "</mark>";
      })
      .replace(/~([^~]+)~/g, function (_, m) {
        return '<span class="trap">' + m + "</span>";
      });
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function questoesDe(id) {
    return QUESTOES.filter(function (q) { return q.filosofos.indexOf(id) !== -1; });
  }

  function temasDe(q, id) {
    return (q.temasPor && q.temasPor[id]) || q.temas;
  }

  /* ---------- ranking ---------- */
  function montarRanking() {
    var lista = document.getElementById("ranking-lista");
    if (!lista) return;
    var max = RANKING.length ? RANKING[0].n : 1;
    var pos = 0, anterior = null;

    RANKING.forEach(function (r, i) {
      if (r.n !== anterior) { pos = i + 1; anterior = r.n; }
      var li = el("li", "r-item");
      li.dataset.filo = r.id;
      li.appendChild(el("span", "r-pos", pos + "º"));

      var nome = el("div", "r-nome");
      var a = el("a", "r-abrir", esc(r.nome));
      a.href = "#" + r.id;
      nome.appendChild(a);
      if (r.nota) nome.appendChild(el("small", null, esc(r.nota)));
      li.appendChild(nome);

      var dados = el("div", "r-dados");
      var barra = el("div", "r-barra");
      var trilho = el("span", "r-trilho");
      var fill = el("span", "r-fill");
      fill.style.width = Math.max(4, Math.round((r.n / max) * 100)) + "%";
      trilho.appendChild(fill);
      barra.appendChild(trilho);
      barra.appendChild(el("span", "r-n", r.n + (r.n === 1 ? " questão" : " questões")));
      dados.appendChild(barra);
      dados.appendChild(el("p", "r-palavras", esc(r.palavras.join(", "))));
      dados.appendChild(el("p", "r-obras", esc(r.obras)));
      var ver = el("a", "r-link", "Ver as " + r.n + " questões");
      ver.href = "#" + r.id;
      dados.appendChild(ver);
      li.appendChild(dados);
      lista.appendChild(li);
    });

    var u = document.getElementById("unicos-lista");
    if (u) {
      UNICOS.forEach(function (x) {
        var li = el("li", "u-item");
        li.dataset.filo = x[0];
        var a = el("a", null, "<b>" + esc(x[1]) + "</b> <span>" + esc(x[2]) + "</span>");
        a.href = "#" + x[0];
        li.appendChild(a);
        u.appendChild(li);
      });
    }
  }

  /* ---------- questões ---------- */
  function extrair(s, re) {
    var achados = [], m;
    re.lastIndex = 0;
    while ((m = re.exec(s))) achados.push(m[1]);
    return achados;
  }

  function lista(itens, cls) {
    return "<ul>" + itens.map(function (x) { return '<li><mark class="' + cls + '">' + esc(x) + "</mark></li>"; }).join("") + "</ul>";
  }

  // coluna da direita: primeiro as palavras-chave do filósofo; o botão mostra as do texto
  function montarChaves(q, atual) {
    var aside = el("aside", "q-chaves");
    aside.setAttribute("aria-label", "Palavras-chave da questão");
    aside.appendChild(el("h3", null, "Palavras-chave"));

    var ids = q.filosofos.slice().sort(function (a, b) { return (a === atual ? -1 : 0) - (b === atual ? -1 : 0); });
    var dois = ids.length > 1;
    ids.forEach(function (id) {
      var f = POR_ID[id];
      if (!f) return;
      aside.appendChild(el("div", "ch-grupo ch-filosofo",
        (dois ? '<p class="ch-tit">' + esc(f.nome) + "</p>" : "") +
        "<ul>" + f.palavras.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"));
    });

    var det = el("div", "ch-detalhe");
    det.id = q.id + "-texto";
    det.hidden = true;

    var botao = el("button", "acender", "Mostrar palavras no texto");
    botao.type = "button";
    botao.setAttribute("aria-expanded", "false");
    botao.setAttribute("aria-controls", det.id);
    aside.appendChild(botao);
    aside.appendChild(det);

    var doTexto = [];
    q.textos.forEach(function (tx) { doTexto = doTexto.concat(extrair(tx.t, /\{([^}]+)\}/g)); });
    if (doTexto.length) {
      det.appendChild(el("div", "ch-grupo", '<p class="ch-tit">No texto</p>' + lista(doTexto, "mk")));
    }

    var refs = q.textos.filter(function (tx) { return tx.ref && tx.ref.obra; }).map(function (tx) {
      return "<li><b>" + esc(tx.ref.autor) + '</b> <mark class="obra">' + esc(tx.ref.obra) + "</mark></li>";
    });
    if (refs.length) {
      det.appendChild(el("div", "ch-grupo", '<p class="ch-tit">Na referência</p><ul>' + refs.join("") + "</ul>"));
    }

    var certa = q.alts.filter(function (a) { return a.ok; })[0];
    if (certa) {
      var doCerto = extrair(certa.t, /\{([^}]+)\}/g);
      det.appendChild(el("div", "ch-grupo ch-resposta",
        '<p class="ch-tit">Na resposta certa (' + esc(certa.l) + ")</p>" + lista(doCerto, "mk-ok")));
    }

    var armas = [];
    q.alts.forEach(function (a) {
      if (a.ok) return;
      extrair(a.t, /~([^~]+)~/g).forEach(function (x) {
        armas.push('<li><span class="ch-letra">' + esc(a.l) + '</span> <span class="trap">' + esc(x) + "</span></li>");
      });
    });
    if (armas.length) {
      det.appendChild(el("div", "ch-grupo ch-armadilhas", '<p class="ch-tit">Armadilhas</p><ul>' + armas.join("") + "</ul>"));
    }

    if (q.ponte) det.appendChild(el("p", "ponte", "<b>Ponte:</b> " + esc(q.ponte)));
    det.appendChild(el("p", "ch-aviso", "Responda a questão para ver as palavras da resposta e as armadilhas."));
    return aside;
  }

  function acender(art, ligar) {
    var botao = art.querySelector(".acender");
    var det = art.querySelector(".ch-detalhe");
    art.classList.toggle("acesa", ligar);
    if (det) det.hidden = !ligar;
    if (botao) {
      botao.setAttribute("aria-expanded", ligar ? "true" : "false");
      botao.textContent = ligar ? "Esconder palavras no texto" : "Mostrar palavras no texto";
    }
  }

  function montarQuestao(q, numero, atual) {
    var art = el("article", "q");
    art.id = q.id;
    art.dataset.temas = temasDe(q, atual).join("|");

    var cab = el("header", "q-cab");
    cab.appendChild(el("span", "q-num", "Questão " + numero));
    cab.appendChild(el("span", "q-prova", esc(q.prova)));
    var temas = el("span", "q-temas");
    temasDe(q, atual).forEach(function (t) { temas.appendChild(el("span", null, esc(t))); });
    cab.appendChild(temas);
    art.appendChild(cab);

    var corpo = el("div", "q-corpo");
    art.appendChild(corpo);
    art.appendChild(montarChaves(q, atual));

    q.textos.forEach(function (tx) {
      var bloco = el("div", "q-texto");
      if (tx.rotulo) bloco.appendChild(el("p", "q-rotulo", esc(tx.rotulo)));
      bloco.appendChild(el("p", "t" + (tx.imagem ? " imagem" : ""), marcar(tx.t)));
      if (tx.ref) {
        bloco.appendChild(el("p", "ref",
          (tx.ref.autor ? '<span class="autor">' + esc(tx.ref.autor) + "</span> " : "") +
          (tx.ref.obra ? '<mark class="obra">' + esc(tx.ref.obra) + "</mark>" : "") + esc(tx.ref.resto || "")));
      }
      corpo.appendChild(bloco);
    });

    corpo.appendChild(el("p", "q-enun", esc(q.enunciado)));

    var ol = el("ol", "alts");
    q.alts.forEach(function (a) {
      var li = el("li", "alt" + (a.ok ? " ok" : ""));
      li.dataset.letra = a.l;
      li.appendChild(el("span", "letra", a.l));
      li.appendChild(el("span", "alt-t", marcar(a.t, a.ok)));
      if (a.ok) li.appendChild(el("span", "selo", "Alternativa correta"));
      if (a.nota) li.appendChild(el("span", "nota", esc(a.nota)));
      ol.appendChild(li);
    });
    corpo.appendChild(ol);

    var fb = el("p", "feedback");
    fb.setAttribute("aria-live", "polite");
    corpo.appendChild(fb);

    var btn = el("button", "revelar", "Ver resposta");
    btn.type = "button";
    corpo.appendChild(btn);
    return art;
  }

  /* ---------- painel: um filósofo por vez ---------- */
  var atualId = null;

  function vizinho(f, passo) {
    var i = f.ordem + passo;
    return FILOSOFOS[(i + FILOSOFOS.length) % FILOSOFOS.length];
  }

  function abrir(id) {
    var f = POR_ID[id];
    var painel = document.getElementById("painel");
    if (!f || !painel) return false;
    if (atualId === id) return true;
    atualId = id;

    var qs = questoesDe(id);
    painel.innerHTML = "";
    painel.setAttribute("aria-labelledby", "painel-t");

    var topo = el("div", "p-topo");
    var ant = vizinho(f, -1), prox = vizinho(f, 1);
    var nav = el("nav", "p-nav");
    nav.setAttribute("aria-label", "Outros filósofos");
    nav.innerHTML =
      '<a class="p-volta" href="#ranking">Ranking</a>' +
      '<a class="p-ant" href="#' + ant.id + '"><span aria-hidden="true">‹</span> ' + esc(ant.nome) + "</a>" +
      '<a class="p-prox" href="#' + prox.id + '">' + esc(prox.nome) + ' <span aria-hidden="true">›</span></a>';
    topo.appendChild(nav);

    var h2 = el("h2", null, esc(f.nome));
    h2.id = "painel-t";
    h2.tabIndex = -1;
    topo.appendChild(h2);
    if (f.nota) topo.appendChild(el("p", "p-nota", esc(f.nota)));
    topo.appendChild(el("p", "lead", esc(qs.length + (qs.length === 1 ? " questão." : " questões.") + (f.fio ? " " + f.fio : ""))));
    topo.appendChild(el("p", "p-obras", "Obras-fonte: " + esc(f.obras)));
    topo.appendChild(el("ul", "p-chaves", f.palavras.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("")));
    painel.appendChild(topo);

    // filtros por tema
    var cont = {};
    qs.forEach(function (q) { temasDe(q, id).forEach(function (t) { cont[t] = (cont[t] || 0) + 1; }); });
    var temas = Object.keys(cont).sort(function (a, b) { return cont[b] - cont[a] || a.localeCompare(b, "pt"); });
    var listaQ = el("div", "q-lista");

    if (temas.some(function (t) { return cont[t] > 1; })) {
      var filtros = el("div", "filtros");
      filtros.setAttribute("role", "group");
      filtros.setAttribute("aria-label", "Filtrar questões de " + f.nome + " por tema");
      var todas = el("button", "chip", "Todas<span>" + qs.length + "</span>");
      todas.type = "button";
      todas.dataset.tema = "";
      todas.setAttribute("aria-pressed", "true");
      filtros.appendChild(todas);
      temas.forEach(function (t) {
        var c = el("button", "chip", esc(t) + "<span>" + cont[t] + "</span>");
        c.type = "button";
        c.dataset.tema = t;
        c.setAttribute("aria-pressed", "false");
        filtros.appendChild(c);
      });
      filtros.addEventListener("click", function (ev) {
        var chip = ev.target.closest(".chip");
        if (!chip) return;
        var tema = chip.dataset.tema;
        filtros.querySelectorAll(".chip").forEach(function (c) {
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        listaQ.querySelectorAll(".q").forEach(function (art) {
          art.hidden = tema !== "" && art.dataset.temas.split("|").indexOf(tema) === -1;
        });
      });
      painel.appendChild(filtros);
    }

    qs.forEach(function (q, i) { listaQ.appendChild(montarQuestao(q, i + 1, id)); });
    painel.appendChild(listaQ);

    var rodape = el("nav", "p-nav p-nav-fim");
    rodape.setAttribute("aria-label", "Próximo filósofo");
    rodape.innerHTML = nav.innerHTML;
    painel.appendChild(rodape);

    painel.hidden = false;
    var vazio = document.getElementById("painel-vazio");
    if (vazio) vazio.hidden = true;

    document.querySelectorAll("[data-filo]").forEach(function (li) {
      var sim = li.dataset.filo === id;
      li.classList.toggle("atual", sim);
      var a = li.querySelector("a");
      if (a) { if (sim) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); }
    });
    document.title = f.nome + " · Filosofia no ENEM";
    prepararTreino(painel);
    return true;
  }

  function rota(rolar) {
    var h = decodeURIComponent(location.hash.slice(1));
    if (!h) return;
    if (POR_ID[h]) {
      abrir(h);
      if (rolar) {
        var painel = document.getElementById("painel");
        painel.scrollIntoView({ block: "start" });
        var t = document.getElementById("painel-t");
        if (t) t.focus({ preventScroll: true });
      }
      return;
    }
    // link direto para uma questão
    var q = QUESTOES.filter(function (x) { return x.id === h; })[0];
    if (q) {
      if (q.filosofos.indexOf(atualId) === -1) abrir(q.filosofos[0]);
      var alvo = document.getElementById(h);
      if (alvo && rolar) alvo.scrollIntoView({ block: "start" });
      return;
    }
    var outro = document.getElementById(h);
    if (outro && rolar) outro.scrollIntoView({ block: "start" });
  }

  /* ---------- modo treino ---------- */
  var CHAVE = "filosofia-enem-modo";

  function prepararTreino(escopo) {
    var treino = document.body.classList.contains("treino");
    escopo.querySelectorAll(".q").forEach(function (art) {
      art.classList.remove("revelada");
      var fb = art.querySelector(".feedback");
      if (fb) { fb.textContent = ""; fb.className = "feedback"; }
      art.querySelectorAll(".alt").forEach(function (li) {
        li.classList.remove("escolhida");
        if (treino) { li.tabIndex = 0; li.setAttribute("role", "button"); }
        else { li.removeAttribute("tabindex"); li.removeAttribute("role"); }
      });
    });
  }

  function aplicarModo(treino) {
    document.body.classList.toggle("treino", treino);
    var b = document.getElementById("modo");
    if (b) b.setAttribute("aria-pressed", treino ? "true" : "false");
    prepararTreino(document);
    try { localStorage.setItem(CHAVE, treino ? "treino" : "estudo"); } catch (e) { /* sem armazenamento */ }
  }

  function revelar(art, escolhida) {
    if (art.classList.contains("revelada")) return;
    art.classList.add("revelada");
    art.querySelectorAll(".alt").forEach(function (li) { li.removeAttribute("tabindex"); li.removeAttribute("role"); });
    var fb = art.querySelector(".feedback");
    if (escolhida && fb) {
      escolhida.classList.add("escolhida");
      var certa = escolhida.classList.contains("ok");
      var correta = art.querySelector(".alt.ok");
      fb.className = "feedback " + (certa ? "certo" : "errado");
      fb.textContent = certa
        ? "Certo: alternativa " + escolhida.dataset.letra + "."
        : "Você marcou " + escolhida.dataset.letra + ". A correta é " + (correta ? correta.dataset.letra : "") + ".";
    }
  }

  function ligarEventos() {
    var b = document.getElementById("modo");
    if (b) b.addEventListener("click", function () {
      aplicarModo(!document.body.classList.contains("treino"));
    });

    document.addEventListener("click", function (ev) {
      var bt = ev.target.closest(".acender");
      if (bt) { var a = bt.closest(".q"); acender(a, !a.classList.contains("acesa")); return; }
      if (!document.body.classList.contains("treino")) return;
      var art = ev.target.closest(".q");
      if (!art) return;
      if (ev.target.closest(".revelar")) { revelar(art, null); return; }
      var alt = ev.target.closest(".alt");
      if (alt && !art.classList.contains("revelada")) revelar(art, alt);
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key !== "Enter" && ev.key !== " ") return;
      var alt = ev.target.closest && ev.target.closest(".alt[role=button]");
      if (!alt) return;
      ev.preventDefault();
      revelar(alt.closest(".q"), alt);
    });

    window.addEventListener("hashchange", function () { rota(true); });
  }

  montarRanking();
  ligarEventos();

  var salvo = null;
  try { salvo = localStorage.getItem(CHAVE); } catch (e) { /* sem armazenamento */ }
  aplicarModo(salvo === "treino");
  rota(true);
})();
