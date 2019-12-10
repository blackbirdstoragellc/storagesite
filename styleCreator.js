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