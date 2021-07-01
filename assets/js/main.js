$(document).ready(function () {
  // css: (max-width: 800px)
  // only enable on mobile
  if (window.innerWidth <= 800 && window.URL_slideout) {
    Even.getScript(window.URL_slideout, Even.mobileNavbar);
  } else {
    Even.backToTop();
  }
  Even.toc();
  Even.fancybox();
  Even.gallery();
});

Even.responsiveTable();
Even.flowchart();
Even.sequence();

if (window.hljs) {
  hljs.initHighlighting();
  Even.highlight();
} else {
  Even.chroma();
}

