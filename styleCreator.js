const urlParams = new URLSearchParams(window.location.search);
const school = urlParams.get('school');
let theme = 'gmu';

switch(['gmu', 'uva', 'jmu', 'umw', 'vt', 'ru'].indexOf(school)) {
    case 0:
        theme = 'gmu';
        break;
    case 1:
        theme = 'gmu';
        break;
    case 2:
        theme = 'gmu';
        break;
    case 3:
        theme = 'gmu';
        break;
    case 4:
        theme = 'vt';
        break;
    case 5:
        theme = 'gmu';
        break;
    default:
        theme = 'gmu';
}


let els = document.querySelectorAll('.themedElement');

console.log(els);

els.forEach(function(el) {
    el.classList.add(theme);
});