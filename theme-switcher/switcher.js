var switcher = document.getElementById('check');

switcher.addEventListener('change', function(event) {
    let body = document.querySelector('body');

    if (event.target.checked) {
        body.style.backgroundColor = "#F1F1F1";
    } else {
        body.style.backgroundColor = "#292C35";
    }
});