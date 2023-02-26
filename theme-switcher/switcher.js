var switcher = document.getElementById('check');

switcher.addEventListener('change', function(event) {
    let body = document.querySelector('body');

    if (event.target.checked) {
        body.classList.remove('bg-light'); 
        body.classList.add('bg-dark');
    } else {
        body.classList.remove('bg-dark'); 
        body.classList.add('bg-light');
    }
});