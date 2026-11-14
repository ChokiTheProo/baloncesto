(function () {
  var C = window.LANDING_CONFIG || {};
  var links = { basico: C.CHECKOUT_BASICO || "#planes", completo: C.CHECKOUT_COMPLETO || "#planes" };
  var VALUE = { basico: 6.9, completo: 14.9 };
  // Solo los botones DENTRO de las tarjetas de planes (#planes .plan) abren el checkout de Hotmart.
  // Todos los demás botones bajan (scroll suave) a las tarjetas de oferta.
  document.querySelectorAll("[data-checkout]").forEach(function (a) {
    var plan = a.getAttribute("data-checkout");
    var inCard = !!a.closest("#planes .plan");
    var url = links[plan] || "#planes";
    if (inCard && url !== "#planes") {
      a.setAttribute("href", url);
      a.setAttribute("rel", "noopener");
      a.addEventListener("click", function () {
        if (window.fbq) window.fbq("track", "InitiateCheckout", { value: VALUE[plan], currency: "USD", content_name: plan === "completo" ? "Plan Completo" : "Plan Básico", content_ids: [plan], content_type: "product" });
      });
    } else {
      a.setAttribute("href", "#planes");
      a.addEventListener("click", function (e) {
        var t = document.getElementById("planes");
        if (!t) return;
        e.preventDefault();
        t.scrollIntoView({ behavior: "smooth", block: "start" });
        if (history.replaceState) history.replaceState(null, "", "#planes");
      });
    }
  });
})();
