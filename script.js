// script.js
document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('toggleButton');
  var gettingStartedSection = document.getElementById('getting-started');

  toggleButton.addEventListener('click', function() {
    var isSectionVisible = gettingStartedSection.style.display !== 'none';
    gettingStartedSection.style.display = isSectionVisible ? 'none' : 'block';
  });
});
