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
