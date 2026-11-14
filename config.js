/* =====================================================================
   CONFIGURACIÓN DE LA PÁGINA DE VENTAS — único lugar a editar.
   1) Pega aquí los enlaces de checkout de Hotmart cuando existan.
      Mientras valgan "#planes", los botones llevan a la sección de planes.
   2) Meta Pixel: pega tu ID en META_PIXEL_ID (solo números). Si queda
      vacío, el píxel NO se carga.
   ===================================================================== */
window.LANDING_CONFIG = {
  CHECKOUT_BASICO: "https://pay.hotmart.com/D108490230M?checkoutMode=10",    // ej.: "https://pay.hotmart.com/XXXXXXXX?off=basico"
  CHECKOUT_COMPLETO: "https://pay.hotmart.com/B108467085J?checkoutMode=10",
  META_PIXEL_ID: "937973155915051",           // ej.: "123456789012345"
};

/* Código base del Meta Pixel (se activa solo si META_PIXEL_ID tiene valor).
   Equivale al snippet oficial:
   !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
   n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
   document,'script','https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', 'TU_PIXEL_ID'); fbq('track', 'PageView');
*/
(function () {
  var id = window.LANDING_CONFIG.META_PIXEL_ID;
  if (!id) return;
  // Stub oficial de fbq: los eventos (PageView, InitiateCheckout) se encolan al instante
  // y fbevents.js se descarga después del evento "load" para no competir con la imagen principal.
  var f = window, n;
  if (f.fbq) return;
  n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
  if (!f._fbq) f._fbq = n;
  n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
  fbq("init", id);
  fbq("track", "PageView");
  function load() {
    var t = document.createElement("script"); t.async = !0;
    t.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(t);
  }
  if (document.readyState === "complete") load();
  else window.addEventListener("load", function () { setTimeout(load, 0); });
})();
