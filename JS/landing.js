
let Nav = `
<div class = 'dorm' id = 'navbar'>

    <a href = 'index.html'>

        <img id = 'mast' src = 'Assets/wolf-pill-blue.png'>

    </a>

    <div id = 'nav'>
        <a href = 'index.html'>
            <h1 class = 'navbtn'> Home </h1>
        </a>
        <a href = 'about.html'>
            <h1 class = 'navbtn'> About </h1>
        </a>
        <a href = 'blog.html'>
            <h1 class = 'navbtn'> Blog </h1>
        </a>
        <a href = 'contact.html'>
            <h1 class = 'navbtn'> Contact </h1>
        </a>
    </div>

</div>

<div id = 'navfab'>
    <div></div>
    <div></div>
    <div></div>
</div>

<div id = 'dark'> </div>

<div id = 'modal'>

    <div class = 'container visible'>
        <h1> Try Wolf Today </h1>
        <div class = 'horflex'>
            <input type = 'email' id = 'email' placeholder = 'EMAIL' aria-label = "email">
            <button id = 'beta'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="14.6px"
                height="13px" viewBox="0 0 14.6 13" style="overflow:visible;enable-background:new 0 0 14.6 13;" xml:space="preserve">
                    <g id = 'arrow'>
                        <line x1="0.5" y1="6.5" x2="13.9" y2="6.5"/>
                        <polyline points="8,0.5 14.1,6.6 8.3,12.5 	"/>
                    </g>
                </svg>
            </button>
        </div>
    </div>

    <div class = 'container'>
        <h1> You've been signed up! </h1>
        <h2> Check your email for updates. </h2>
        <button id = 'ok'> OK </button>
    </div>

</div>

`

Tag('body')[0].innerHTML = Nav + Tag('body')[0].innerHTML

/*
var analysisAnim = lottie.loadAnimation({
    container: Id('analysis'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './JS/JSON/analysis.json',
    name: 'analysis'
});

var academyAnim = lottie.loadAnimation({
    container: Id('academy'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './JS/JSON/academy.json',
    name: 'academy'
});

var portfolioAnim = lottie.loadAnimation({
    container: Id('portfolio'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './JS/JSON/portfolio.json',
    name: 'portfolio'
});

var wolfpackAnim = lottie.loadAnimation({
    container: Id('wolfpack'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: './JS/JSON/wolfpack.json',
    name: 'wolfpack'
});
*/


let index, integer;

let array = [0,0]

let waves = [Id('wave-1'), Id('wave-2'), Id('wave-3')]


const LandingLoop = () => {

    index = window.scrollY / window.innerHeight;
    integer = Math.floor(index);

    array.push(integer)

    for (let i=0; i<Class('slide').length; i++){
        let slide = Class('slide')[i]

        let threshold;

        switch (i){
            case 1:
                threshold = 2;
                break;
            case 2:
                threshold = 1.5;
                break;
            default:
                threshold = 1.3;
                break;
        }

        if (i < Class('slide').length-1){
            if (index > threshold*i){
                slide.style.opacity = 0;
                slide.style.position = 'static'
            }else if (index > 1.2*i ){
                slide.style.position = 'sticky'
            }else{
                slide.style.opacity = 1;
            }

        }
    }

    // Pointer
    if (index > 0.5){
        Id('pointer').style.opacity = 0
    }else{
        Id('pointer').style.opacity = 0.5
    }

    if (array[array.length-1] != array[array.length-2]){
        academyAnim.goToAndPlay(1, true)
        wolfpackAnim.goToAndPlay(1, true)
        portfolioAnim.goToAndPlay(1, true)
        analysisAnim.goToAndPlay(1, true)
    }

    // Dots
    if (integer < 5){

        for (let i=0; i<Class('dot').length; i++){

            let dot = Class('dot')[i]

            if (integer == i+1){
                dot.classList.add('active')
            }else{
                dot.classList.remove('active')
            }

        }
    }

    if (index < 1){
        Id('dots').classList.remove('active')
    }else{
        Id('dots').classList.add('active')
    }

    // Mobile

    if (window.innerWidth < 800){

        for (let i=0; i<Class('right').length; i++){
            let slide = Class('right')[i]
            let content = slide.firstElementChild
            let expo = content.firstElementChild
            let anim = content.lastElementChild

            expo.style.transform = `translateY(${anim.getBoundingClientRect().height}px)`
            anim.style.transform = `translateY(-${expo.getBoundingClientRect().height}px)`
        }

    }else{

        Class('flagship')[0].style.transform = ``

        for (let i=0; i<Class('right').length; i++){
            let slide = Class('right')[i]
            let content = slide.firstElementChild
            let expo = content.firstElementChild
            let anim = content.lastElementChild

            expo.style.transform = ``
            anim.style.transform = ``
        }

        for (let i=0; i<waves.length; i++){
            let wave = waves[i]

            let n = 1

            switch (i){
                case 0:
                    n = 1;
                    break;
                case 1:
                    n = 0.7;
                    break;
                case 2:
                    n = 0.5;
                    break;
            }

            wave.style.bottom = window.scrollY*n + 'px'

        }
    }

    window.requestAnimationFrame(LandingLoop)
}
window.requestAnimationFrame(LandingLoop)
