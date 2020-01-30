const urlParams = new URLSearchParams(window.location.search);
const school = urlParams.get('school');
let theme = 'gmu';
let innerText = 'Serving George Mason University';

switch(['umw', 'uva', 'jmu', 'gu', 'mu', 'gwu', 'gmu', 'su', 'umd'].indexOf(school)) {
    case 0:
        theme = 'umw';
        innerText = 'Serving University of Mary Washington';
        break;
    case 1:
        theme = 'uva';
        innerText = 'Serving University of Virginia';
        break;
    case 2:
        theme = 'jmu';
        innerText = 'Serving James Madison University';
        break;
    case 3:
        theme = 'gu';
        innerText = 'Serving Georgetown University';
        break;
    case 4:
        theme = 'mu';
        innerText = 'Serving Marymount University';
        break;
    case 5:
        theme = 'gwu';
        innerText = 'Serving George Washington University';
        break;
    case 6:
        theme = 'gmu';
        innerText = 'Serving George Mason University';
        break;
    case 7:
        theme = 'su';
        innerText = 'Serving Shenandoah University';
        break;
    case 8:
        theme = 'umd';
        innerText = 'Serving University of Maryland';
        break;
    default:
        theme = 'gmu';
        innerText = 'Serving George Mason University';
}


let els = document.querySelectorAll('.themedElement');

els.forEach(function(el) {
    el.classList.add(theme);
});

select_element = document.getElementById('dynamic_select');
if (select_element != null) {
    select_element.value = theme;
}

home_btn = document.getElementById('home_btn');
if (home_btn != null) {
    home_btn.href="index.html?school=" + theme;
}

pricing_btn = document.getElementById('pricing_btn');
if (pricing_btn != null) {
    pricing_btn.href="index.html?school=" + theme + "#pricing";
}

blog_btn = document.getElementById('blog_btn');
if (blog_btn != null) {
    blog_btn.href="blog.html?school=" + theme;
}

let btns = document.querySelectorAll('.reserve_btn');
btns.forEach(function(el) {
    el.href="signup.html?school=" + theme;
});

let mainTxt = document.getElementById('mainTxt');
if (mainTxt != null) {
    mainTxt.innerHTML=innerText;
}