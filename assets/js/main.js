const mainBtn = document.getElementById('startTodayBtn');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');

mainBtn.addEventListener('click', function() {
    gtag('event', 'Click in Start today button');
});

loginBtn.addEventListener('click', function() {
    gtag('event', 'Click in Login button');
});

registerBtn.addEventListener('click', function() {
    gtag('event', 'Click in Register button');
});
