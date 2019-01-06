document.getElementById('button').addEventListener('click', loadData)

function loadData(){
    // Create an XHR object
    const xhr = new XMLHttpRequest();

    // Open 
    xhr.open('GET', 'data.txt', true); 

    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState)
    }

    xhr.onerror = function(){
        console.log('Response error...')
    }

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.send();
}