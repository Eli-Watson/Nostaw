import flamethrower from 'https://cdn.jsdelivr.net/npm/flamethrower-router@0.0.0-meme.12/dist/main.min.js';
// const router = flamethrower({ prefetch: 'visible', log: true, pageTransitions: false });

// Nav Controls
if (document.querySelector('.sidenav-toggle') == true) {
    document.querySelector('.sidenav-toggle').addEventListener('click', function() {
    document.querySelector('.sidenav').classList.toggle('open');
});   
} else {
    console.log('No nav Toggle Buttom')
}

