const urlParams = new URLSearchParams(window.location.search);
const school = urlParams.get('school');
let theme = 'gmu';

switch(['gmu', 'uva', 'jmu', 'umw', 'vt', 'ru'].indexOf(school)) {
    case 0:
        alert("school is gmu");
        theme = 'gmu';
        break;
    case 1:
        alert("school is uva");
        theme = 'gmu';
        break;
    case 2:
        alert("school is jmu");
        theme = 'gmu';
        break;
    case 3:
        alert("school is umw");
        theme = 'gmu';
        break;
    case 4:
        alert("school is vt");
        theme = 'vt';
        break;
    case 5:
        alert("school is ru");
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