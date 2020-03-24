const URL = 'https://columns-6f7df.firebaseio.com/columns.json';

fetch(URL)
    .then(response => response.json())
    .then(data => {
        document.getElementById('root').innerHTML = JSON.stringify(data);        
    });
