// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./bootstrap.bundle.min.js";


//
// Place any custom JS here
//

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })

document.querySelectorAll('.yg-submit-feedback-link')
  .forEach(link => {
    const feedbackQueryString = `onlineService=${encodeURIComponent(document.title)}&url_referrer=${encodeURIComponent(window.location)}`
    if (link.href.includes("?")) {
      // In this case there's already a query string, so append with & in between
      link.href = link.href + "&" + feedbackQueryString
    } else {
      // In this case, there isn't a query string yet, so append with a ? in between
      link.href = link.href + "?" + feedbackQueryString
    }
  })
