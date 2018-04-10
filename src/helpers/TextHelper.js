// Change this to increase or slow typing speed
// The console will type each letter at a random interval between 0ms and `speed` ms.
let speed = 300;
let cursorSpeed = 400;
let time = 0;
let prevTime = 0;

// Change this variable to change what gets typed
let text = 'Hello, world. I am a self-typing console. Change my `speed` variable in javascript to  increase or decrease the speed at which I type. Change the `text` variable to change what is typed.';

function writeWord(word) {
    for (let c in word.split('')) {
        time = Math.floor(Math.random() * speed);
        console.log(time);
        setTimeout(() => {
            $('#text').before(word[c]);
        }, (prevTime + time));

        prevTime += time;
    }
}

writeWord(text);

// blink cursor
window.setInterval(() => {
    $('.cursor').toggleClass('hide');
}, cursorSpeed);


//HTML

{/*<div id="gutter"></div>*/}
{/*<div id="container"><span class="prompt">>  </span>*/}
{/*<div id="text"></div>*/}
{/*<div class="cursor"></div>*/}
{/*</div>*/}



// CSS
/*

:root {
    --color: #11f930;
}

html,
    body {
    background: #222;
    color: white;
    font-family: 'Source Code Pro', 'Inconsolata', monospace;
}

#gutter {
    display: inline-block;
    width: 5%;
    height: 100vh;
}

#container {
    display: inline-block;
    margin-top: 3em;
    width: 95%;
    max-width: 95%;
    float: right;
}

#text {
    display: inline-block;
    margin: .8em 0;
}

.cursor {
    display: inline-block;
    height: 1.2em;
    width: .5em;
    background: var(--color);
    margin-top: .3em;
    margin-left: -.5em;
}

.prompt {
    color: var(--color);
}

.hide {
    display: none;
*/
//}