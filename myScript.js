const container = document.getElementById('container');
let hovers;

function gridSize (lineNum,perLineNum){
    let currentLine=1;
    let currentPerLine=1;
    for(;currentLine <= lineNum; currentLine++){
        const line = document.createElement('div');
        line.classList.add('line');
        /*line.textContent = `x`;*/
        /* Create line div here*/
        container.appendChild(line)
        console.log(`currentLine: ${currentLine}`);
        for(;currentPerLine <= perLineNum; currentPerLine++){
            const perLine = document.createElement('div');
            perLine.classList.add('perLine');
            perLine.textContent = ``;
            /* Create grid within one line here*/
            line.appendChild(perLine);
            console.log(`currentPerLine: ${currentPerLine}`);
        }
        currentPerLine=1;
    }
   divEventListener();
}

function divEventListener(){
    hovers = document.querySelectorAll('.perLine');
    hovers.forEach(div => {
        div.addEventListener('mouseenter', () => {
            event.target.classList.add('permaHover');
        })
    });
}