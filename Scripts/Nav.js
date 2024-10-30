document.addEventListener('DOMContentLoaded', function() {
    fetch('/Nostaw/Nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Nav').innerHTML = data;
        });
        fetch('/Nostaw/Footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Footer').innerHTML = data;
        });
            document.querySelector('.sidenav-toggle').addEventListener('click', function() {
            document.querySelector('.sidenav').classList.toggle('open');
        });       
    });
    