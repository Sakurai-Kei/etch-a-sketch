const container = document.getElementById('container');
let hovers;
let buttonSelection;
let size=0;
let eraseBox;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonSelection = button.id;
        userInput(buttonSelection);
    });
});

function userInput(buttonSelection) {
    if(buttonSelection == 'size'){
        resetGridArea(parseInt(size));
        size = prompt('Input Sketch Size. Please enter only one number up to 64');
        if(parseInt(size) > 64){
            alert('Input too large. A maximum value of 64 is allowed')
        }
        else if(parseInt(size) >= 1){
            gridSize(size,size);
        }
        else{
            alert('You have non integer value. Please re-enter valid value')
        }
    }
    else if(buttonSelection == 'reset'){
        resetGridArea(parseInt(size));
    }
    else if(buttonSelection == 'erase'){
        erase();
    }
    else if(buttonSelection == 'black'){
        black();
    }
}

function gridSize (lineNum,perLineNum){
    let currentLine = 1;
    let currentPerLine = 1;
    for(;currentLine <= lineNum; currentLine++){
        const line = document.createElement('div');
        line.classList.add('line');
        /*line.textContent = `x`;*/
        /* Create line div here*/
        container.appendChild(line);
        console.log(`currentLine: ${currentLine}`);
        for(;currentPerLine <= perLineNum; currentPerLine++){
            const perLine = document.createElement('div');
            perLine.classList.add('perLine');
            perLine.textContent = ``;
            /* Create grid within one line here*/
            line.appendChild(perLine);
            console.log(`currentPerLine: ${currentPerLine}`);
        }
        currentPerLine = 1;
    }
   black();
}

function black(){
    hovers = document.querySelectorAll('.perLine');
    hovers.forEach(div => {
        div.addEventListener('mouseenter', () => {
            event.target.classList.add('permaHover');
        })
    });
}

function resetGridArea(lineNum){
    let currentLine = 1;
    for(;currentLine <= lineNum; currentLine++){
        const lineRemove = document.querySelector('.line');
        if(lineRemove == null){
            return;
        }
        else{
        lineRemove.remove();
        }
    }
}

function erase(){
    eraseBox = document.querySelectorAll('.perLine');
    eraseBox.forEach(div => {
        div.addEventListener('mouseenter', () => {
            event.target.classList.remove('permaHover');
        });
    });
}