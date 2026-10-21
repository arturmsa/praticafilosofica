(function () {
  "use strict";

  var QUESTOES = window.QUESTOES || [];
  var RANKING = window.RANKING || [];
  var UNICOS = window.UNICOS || [];
  var DESTAQUES = window.DESTAQUES || [];

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

  /* ---------- ranking ---------- */
  function montarRanking() {
    var lista = document.getElementById("ranking-lista");
    if (!lista) return;
    var max = RANKING.length ? RANKING[0].n : 1;
    var pos = 0, anterior = null;

    RANKING.forEach(function (r, i) {
      if (r.n !== anterior) { pos = i + 1; anterior = r.n; }
      var li = el("li", "r-item" + (r.secao ? " destaque" : ""));
      li.appendChild(el("span", "r-pos", pos + "º"));

      var nome = el("div", "r-nome", "<strong>" + esc(r.nome) + "</strong>" +
        (r.nota ? "<small>" + esc(r.nota) + "</small>" : ""));
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
      if (r.secao) {
        dados.appendChild(el("a", "r-link", "Ver as " + r.n + " questões com as palavras marcadas"));
        dados.lastChild.href = "#" + r.secao;
      }
      li.appendChild(dados);
      lista.appendChild(li);
    });

    var u = document.getElementById("unicos-lista");
    if (u) {
      u.innerHTML = UNICOS.map(function (x) {
        return "<b>" + esc(x[0]) + "</b> (" + esc(x[1]) + ")";
      }).join("; ") + ".";
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
  function montarChaves(q) {
    var aside = el("aside", "q-chaves");
    aside.setAttribute("aria-label", "Palavras-chave da questão");
    aside.appendChild(el("h3", null, "Palavras-chave"));

    var dois = q.filosofos.length > 1;
    q.filosofos.forEach(function (id) {
      var r = RANKING.filter(function (x) { return x.secao === id; })[0];
      if (!r) return;
      aside.appendChild(el("div", "ch-grupo ch-filosofo",
        (dois ? '<p class="ch-tit">' + esc(r.nome) + "</p>" : "") +
        "<ul>" + r.palavras.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"));
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

    var refs = q.textos.filter(function (tx) { return tx.ref; }).map(function (tx) {
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

  function montarQuestao(q, numero) {
    var art = el("article", "q");
    art.id = q.id;
    art.dataset.temas = q.temas.join("|");

    var cab = el("header", "q-cab");
    cab.appendChild(el("span", "q-num", "Questão " + numero));
    cab.appendChild(el("span", "q-prova", esc(q.prova)));
    var temas = el("span", "q-temas");
    q.temas.forEach(function (t) { temas.appendChild(el("span", null, esc(t))); });
    cab.appendChild(temas);
    art.appendChild(cab);

    var corpo = el("div", "q-corpo");
    art.appendChild(corpo);
    art.appendChild(montarChaves(q));

    q.textos.forEach(function (tx) {
      var bloco = el("div", "q-texto");
      if (tx.rotulo) bloco.appendChild(el("p", "q-rotulo", esc(tx.rotulo)));
      bloco.appendChild(el("p", "t" + (tx.imagem ? " imagem" : ""), marcar(tx.t)));
      if (tx.ref) {
        bloco.appendChild(el("p", "ref",
          '<span class="autor">' + esc(tx.ref.autor) + "</span> " +
          '<mark class="obra">' + esc(tx.ref.obra) + "</mark>" + esc(tx.ref.resto || "")));
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

  function montarDestaques() {
    var raiz = document.getElementById("destaques");
    if (!raiz) return;

    DESTAQUES.forEach(function (d) {
      var qs = QUESTOES.filter(function (q) { return q.filosofos.indexOf(d.id) !== -1; });
      var sec = el("section", "secao");
      sec.id = d.id;
      sec.setAttribute("aria-labelledby", d.id + "-t");

      var h2 = el("h2", null, esc(d.nome));
      h2.id = d.id + "-t";
      sec.appendChild(h2);
      sec.appendChild(el("p", "lead", esc(qs.length + " questões. " + d.fio)));
      sec.appendChild(el("p", "lead", "Obras-fonte: " + esc(d.obras)));

      // palavras-chave (temas) com contagem
      var cont = {};
      qs.forEach(function (q) { q.temas.forEach(function (t) { cont[t] = (cont[t] || 0) + 1; }); });
      var temas = Object.keys(cont).sort(function (a, b) { return cont[b] - cont[a] || a.localeCompare(b, "pt"); });

      var filtros = el("div", "filtros");
      filtros.setAttribute("role", "group");
      filtros.setAttribute("aria-label", "Filtrar questões de " + d.nome + " por palavra-chave");
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
      sec.appendChild(filtros);

      var lista = el("div", "q-lista");
      qs.forEach(function (q, i) { lista.appendChild(montarQuestao(q, i + 1)); });
      sec.appendChild(lista);

      filtros.addEventListener("click", function (ev) {
        var chip = ev.target.closest(".chip");
        if (!chip) return;
        var tema = chip.dataset.tema;
        filtros.querySelectorAll(".chip").forEach(function (c) {
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        lista.querySelectorAll(".q").forEach(function (art) {
          art.hidden = tema !== "" && art.dataset.temas.split("|").indexOf(tema) === -1;
        });
      });

      raiz.appendChild(sec);
    });
  }

  /* ---------- modo treino ---------- */
  var CHAVE = "filosofia-enem-modo";

  function aplicarModo(treino) {
    document.body.classList.toggle("treino", treino);
    var b = document.getElementById("modo");
    if (b) b.setAttribute("aria-pressed", treino ? "true" : "false");
    document.querySelectorAll(".q").forEach(function (art) {
      art.classList.remove("revelada");
      var fb = art.querySelector(".feedback");
      if (fb) { fb.textContent = ""; fb.className = "feedback"; }
      art.querySelectorAll(".alt").forEach(function (li) {
        li.classList.remove("escolhida");
        if (treino) { li.tabIndex = 0; li.setAttribute("role", "button"); }
        else { li.removeAttribute("tabindex"); li.removeAttribute("role"); }
      });
    });
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
  }

  montarRanking();
  montarDestaques();
  ligarEventos();

  var salvo = null;
  try { salvo = localStorage.getItem(CHAVE); } catch (e) { /* sem armazenamento */ }
  aplicarModo(salvo === "treino");

  if (location.hash) {
    var alvo = document.getElementById(location.hash.slice(1));
    if (alvo) alvo.scrollIntoView();
  }
})();
