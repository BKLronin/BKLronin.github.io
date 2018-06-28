function animateInViewport(query, cssClass, space) {
  var spacing = space || 20;
  var elements = document.querySelectorAll(query);
  elements.forEach(function(element) {
    var watcher = window.scrollMonitor.create(element, spacing);

    watcher.enterViewport(function() {
      element.classList.add(cssClass);
    });

    watcher.exitViewport(function() {
      element.classList.remove(cssClass);
    });
  });
}

animateInViewport('[links]', 'fadeInLeft', 20);
animateInViewport('[rechts]', 'fadeInRight', 20);
animateInViewport('[hoch]', 'fadeInUp', 20);
animateInViewport('[fade]', 'fadeIn', 20);
animateInViewport('[runter]', 'fadeInDown', 20);
