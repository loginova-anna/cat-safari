const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') != -1
                && navigator.userAgent.toLowerCase().indexOf('chrome') == -1;
const margin = isSafari ? 3 : 1;
const place = (Math.round(Math.random()) + margin);
let infoId = 'info' + place;
let emptyId = 'empty' + place;
let infoElement = document.getElementById(infoId);
let emptyElement = document.getElementById(emptyId);
infoElement.classList.remove('hidden');
emptyElement.classList.add('hidden');

function reload() {
    window.location.reload();
}
