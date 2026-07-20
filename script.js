// Altrust Seguros y Fianzas — GMM Landing
// Fade-in al hacer scroll + tracking de Meta Pixel en botones de WhatsApp

document.addEventListener('DOMContentLoaded', function () {

  // --- Fade-in al hacer scroll ---
  var fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // --- Tracking de Meta Pixel en botones de WhatsApp ---
  var whatsappButtons = document.querySelectorAll('.whatsapp-btn');

  whatsappButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (typeof fbq === 'function') {
        fbq('track', 'Lead');
      }
    });
  });

});
