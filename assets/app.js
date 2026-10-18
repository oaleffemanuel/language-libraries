// Entrada suave das seções ao rolar. Sem JS, ou com movimento reduzido, tudo aparece normalmente.
(function () {
  "use strict";
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var itens = document.querySelectorAll(".revelar");
  if (!itens.length) return;
  document.documentElement.classList.add("anim");
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visivel"); obs.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  itens.forEach(function (el) { obs.observe(el); });
})();

(function () {
  "use strict";
  var cfg = window.PORTAL_CONFIG || {};
  var pix = cfg.pix || {};
  var chave = (pix.chave || "").trim();
  if (!chave) return; // doação inativa: nada a fazer

  var bloco = document.getElementById("pix");
  var inativo = document.getElementById("pix-inativo");
  var abrir = document.getElementById("pix-abrir");
  var painel = document.getElementById("pix-painel");
  var rotulo = document.getElementById("pix-rotulo");
  var codigo = document.getElementById("pix-chave");
  var nome = document.getElementById("pix-nome");
  var copiar = document.getElementById("pix-copiar");
  if (!bloco || !abrir || !painel || !codigo) return;

  codigo.textContent = chave;
  if (pix.tipo) rotulo.textContent = "Chave Pix (" + pix.tipo + ")";
  if (pix.nome) nome.textContent = "Beneficiário: " + pix.nome; else nome.hidden = true;

  bloco.hidden = false;
  if (inativo) inativo.hidden = true;

  abrir.addEventListener("click", function () {
    var aberto = painel.hidden;
    painel.hidden = !aberto;
    abrir.setAttribute("aria-expanded", String(aberto));
    if (aberto) codigo.focus();
  });

  copiar.addEventListener("click", function () {
    var feito = function () {
      copiar.textContent = "Chave copiada";
      setTimeout(function () { copiar.textContent = "Copiar chave"; }, 2000);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(chave).then(feito, function () { selecionar(); });
    } else {
      selecionar();
    }
  });

  function selecionar() {
    var faixa = document.createRange();
    faixa.selectNodeContents(codigo);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(faixa);
  }
})();
