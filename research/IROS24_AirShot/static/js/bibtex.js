document.querySelectorAll('.bibtex-toggle').forEach(function (button) {
  button.addEventListener('click', function () {
    var citation = document.getElementById(button.getAttribute('aria-controls'));
    if (!citation) return;
    var expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    citation.hidden = expanded;
  });
});
