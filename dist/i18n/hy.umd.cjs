(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})((function() {
  "use strict";
  const i18n = {
    ariaLinkLabel: "Altcha (պաշտոնական կայք)",
    enterCode: "Մուտքագրեք կոդը",
    enterCodeAria: "Մուտքագրեք այն կոդը, որը լսում եք։ Ձայնը նվագելու համար սեղմեք բացատ (Space):",
    error: "Հաստատումը ձախողվեց։ Փորձեք ավելի ուշ։",
    expired: "Հաստատման ժամկետը լրացել է։ Փորձեք կրկին։",
    footer: 'Պաշտպանված է <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (պաշտոնական կայք)">ALTCHA</a>-ի կողմից',
    getAudioChallenge: "Ստանալ ձայնային առաջադրանք",
    label: "Ես ռոբոտ չեմ",
    loading: "Բեռնվում է...",
    reload: "Թարմացնել",
    verify: "Հաստատել",
    verificationRequired: "Պահանջվում է հաստատում։",
    verified: "Հաստատված է",
    verifying: "Հաստատվում է...",
    waitAlert: "Հաստատվում է... խնդրում ենք սպասել։",
    cancel: "Չեղարկել",
    enterCodeFromImage: "Շարունակելու համար, խնդրում ենք մուտագրել ստորև պատկերից վերցված կոդը:"
  };
  if ("$altcha" in globalThis) {
    globalThis.$altcha.i18n.set("hy", i18n);
  }
}));
