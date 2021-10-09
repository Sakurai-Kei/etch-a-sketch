const container = document.getElementById('container');






function gridSize (lineNum,perLineNum){
    let currentLine=1;
    let currentPerLine=1;
    for(;currentLine <= lineNum; currentLine++){
        const line = document.createElement('div');
        line.textContent = 'Line One';
        /* Create line div here*/
        container.appendChild(line)
        console.log(`currentLine: ${currentLine}`);
        for(;currentPerLine <= perLineNum; currentPerLine++){
            const perLine = document.createElement('div');
            perLine.textContent = 'Box within Line';
            /* Create grid within one line here*/
            line.appendChild(perLine);
            console.log(`currentPerLine: ${currentPerLine}`);
        }
        currentPerLine=1;
    }
}
