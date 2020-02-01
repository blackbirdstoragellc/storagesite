const urlParams = new URLSearchParams(window.location.search);
const school = urlParams.get('school');
let theme = 'gmu';
let innerText = 'Sign up today to reserve your spot at University of Mary Washington';

switch(['umw', 'uva', 'jmu', 'gu', 'mu', 'gwu', 'gmu', 'su', 'umd'].indexOf(school)) {
    case 0:
        theme = 'umw';
        innerText = 'Sign up today to reserve your spot at University of Mary Washington';
        break;
    case 1:
        theme = 'uva';
        innerText = 'Sign up today to reserve your spot at University of Virginia';
        break;
    case 2:
        theme = 'jmu';
        innerText = 'Sign up today to reserve your spot at James Madison University';
        break;
    case 3:
        theme = 'gu';
        innerText = 'Sign up today to reserve your spot at Georgetown University';
        break;
    case 4:
        theme = 'mu';
        innerText = 'Sign up today to reserve your spot at Marymount University';
        break;
    case 5:
        theme = 'gwu';
        innerText = 'Sign up today to reserve your spot at George Washington University';
        break;
    case 6:
        theme = 'gmu';
        innerText = 'Sign up today to reserve your spot at George Mason University';
        break;
    case 7:
        theme = 'su';
        innerText = 'Sign up today to reserve your spot at Shenandoah University';
        break;
    case 8:
        theme = 'umd';
        innerText = 'Sign up today to reserve your spot at University of Maryland';
        break;
    default:
        let url = "index.html?school=gmu"; // default to gmu
        if (url) {
            window.location = url; // redirect
        }
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

about_btn = document.getElementById('about_btn');
if (about_btn != null) {
    about_btn.href="about.html?school=" + theme;
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