(function () {
  "use strict";

  var doc = document;

  // Ano no rodapé
  var ano = doc.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // Menu no celular
  var btn = doc.querySelector(".menu-btn");
  var menu = doc.getElementById("menu");
  function setMenu(open) {
    btn.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("open", open);
  }
  if (btn && menu) {
    btn.addEventListener("click", function () {
      setMenu(btn.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        btn.focus();
      }
    });
  }

  // Contatos a partir de js/config.js
  var cfg = window.SITE_CONFIG || {};
  var items = [];
  var assunto = encodeURIComponent("Conversa sobre uma necessidade da minha empresa");
  var texto = encodeURIComponent("Olá, Felipe! Vi seu portfólio e gostaria de conversar sobre uma tarefa da minha equipe.");

  if (cfg.email) items.push({ label: "Enviar e-mail", href: "mailto:" + cfg.email + "?subject=" + assunto, primary: true });
  if (cfg.whatsapp) items.push({ label: "Chamar no WhatsApp", href: "https://wa.me/" + String(cfg.whatsapp).replace(/\D/g, "") + "?text=" + texto, external: true, primary: !cfg.email });
  if (cfg.linkedin) items.push({ label: "LinkedIn", href: cfg.linkedin, external: true });
  if (cfg.github) items.push({ label: "GitHub", href: cfg.github, external: true });

  var list = doc.getElementById("contact-links");
  var pending = doc.getElementById("contact-pending");
  if (list && items.length) {
    items.forEach(function (it) {
      var li = doc.createElement("li");
      var a = doc.createElement("a");
      a.className = "btn " + (it.primary ? "btn-primary" : "btn-ghost");
      a.href = it.href;
      a.textContent = it.label;
      if (it.external) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      li.appendChild(a);
      list.appendChild(li);
    });
    list.hidden = false;
    if (pending) pending.hidden = true;
  }

  // Aparecer suavemente ao rolar (desativado com movimento reduzido)
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = doc.querySelectorAll(".reveal");
  if (!reduce && "IntersectionObserver" in window) {
    doc.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }
})();
