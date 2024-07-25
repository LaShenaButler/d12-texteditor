
function clearText() {
    //set value to empty
   document.getElementById('typingArea').value = "";
   //set bold to normal
   document.getElementById('typingArea').style.fontWeight = 'normal'
   //set italic to normal
   document.getElementById('typingArea').style.fontStyle = 'normal'
   //set underline to normal
   document.getElementById('typingArea').style.textDecoration = 'none'
   //set center to normal
   document.getElementById('typingArea').style.textAlign = 'left'
   //set text to normal
   document.getElementById('typingArea').style.textTransform = 'none'

}


function red() {
document.getElementById('typingArea').style.color = 'red'
}

function blue() {
    document.getElementById('typingArea').style.color = 'blue'
    }

function bold() {
document.getElementById('typingArea').style.fontWeight = 'bold'
}

function italic() {
document.getElementById('typingArea').style.fontStyle = 'italic'
}

function underline() {
document.getElementById('typingArea').style.textDecoration = 'underline'
}

function center() {
document.getElementById('typingArea').style.textAlign = 'center'
}

function left() {
document.getElementById('typingArea').style.textAlign = 'left'
}

function right() {
document.getElementById('typingArea').style.textAlign = 'right'
}

function uppercase() {
document.getElementById('typingArea').style.textTransform = 'uppercase'
}

function lowercase() {
document.getElementById('typingArea').style.textTransform = 'lowercase'
}

function capitalize() {
document.getElementById('typingArea').style.textTransform = 'capitalize'
}


// add an event listener to the clear button
// onclick="clearText()"
// element.addeventListener('click', clearText)
// btnClear.addEventListener('click', clearText)
// document.getElementById("btnClear").addEventListener('click', clearText)
document.getElementById('btnClear').addEventListener("click", clearText)

// add an event listener to the bold button
// onclick="bold()"
// element.addeventListener('click', bold)
// bold.addEventListener('click', bold)
// document.getElementById("btnClear").addEventListener('click', bold)
document.getElementById('bold').addEventListener("click", bold)

// add an event listener to the italic button
// onclick="italic()"
// element.addeventListener('click', italic)
// italic.addEventListener('click', italic)
// document.getElementById("italic").addEventListener('click', italic)
document.getElementById('italic').addEventListener("click", italic)

// add an event listener to the underline button
// onclick="underline()"
// element.addeventListener('click', underline)
// underline.addEventListener('click', underline)
// document.getElementById("underline").addEventListener('click', underline)
document.getElementById('underline').addEventListener("click", underline)


// add an event listener to the center button
// onclick="center()"
// element.addeventListener('click', center)
// center.addEventListener('click', center)
// document.getElementById("center").addEventListener('click', center)
document.getElementById('center').addEventListener("click", center)

// add an event listener to the left button
// onclick="left()"
// element.addeventListener('click', left)
// left.addEventListener('click', left)
// document.getElementById("left").addEventListener('click', left)
document.getElementById('left').addEventListener("click", left)

// add an event listener to the right button
// onclick="right()"
// element.addeventListener('click', right)
// right.addEventListener('click', right)
// document.getElementById("right").addEventListener('click', right)
document.getElementById('right').addEventListener("click", right)

// add an event listener to the uppercase button
// onclick="uppercase()"
// element.addeventListener('click', uppercase)
// uppercase.addEventListener('click', uppercase)
// document.getElementById("uppercase").addEventListener('click', uppercase)
document.getElementById('uppercase').addEventListener("click", uppercase)

// add an event listener to the lowercase button
// onclick="lowercase()"
// element.addeventListener('click', lowercase)
// lowercase.addEventListener('click', lowercase)
// document.getElementById("lowercase").addEventListener('click', lowercase)
document.getElementById('lowercase').addEventListener("click", lowercase)

// add an event listener to the capitalize button
// onclick="capitalize()"
// element.addeventListener('click', capitalize)
// capitalize.addEventListener('click', capitalize)
// document.getElementById("capitalize").addEventListener('click', capitalize)
document.getElementById('capitalize').addEventListener("click", capitalize)

// add an event listener to the red button
// onclick="red()"
// element.addeventListener('click', red)
// red.addEventListener('click', red)
// document.getElementById("red").addEventListener('click', red)
document.getElementById('red').addEventListener("click", red)

// add an event listener to the blue button
// onclick="blue()"
// element.addeventListener('click', blue)
// blue.addEventListener('click', blue)
// document.getElementById("blue").addEventListener('click', blue)
document.getElementById('blue').addEventListener("click", blue)