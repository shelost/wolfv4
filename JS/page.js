
let Nav = `
<div class = 'dorm' id = 'navbar'>

    <a href = 'index.html'>
        <div>
            <img id = 'mast' src = 'Assets/wolf-pill-blue.png'>
        </div>
    </a>

    <div id = 'nav'>
        <a href = 'index.html'>
            <h1 id = 'index' class = 'navbtn'> Home </h1>
        </a>
        <a href = 'about.html'>
            <h1 id = 'about' class = 'navbtn'> About </h1>
        </a>
        <a href = 'blog.html'>
            <h1 id = 'blog' class = 'navbtn'> Blog </h1>
        </a>
        <a href = 'contact.html'>
            <h1 id = 'contact' class = 'navbtn'> Contact </h1>
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

for (let i=0; i<Class('navbtn').length; i++){
    let navbtn = Class('navbtn')[i]

    navbtn.classList.remove('active')
}