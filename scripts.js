//Create a request variable and assign a new XMLHttpRequest object to it
let req = new XMLHttpRequest();
req.responseType = 'json';
//Open a new connection, using the GET request on the URL endpoint
req.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

req.onload = () => {
    //Begin accessing JSON data here
    let data = req.response;

    if(req.status >= 200 && req.status < 400){
        data.forEach(movie => {
            //Log each movie's title
            console.log(movie.title);
        });
    }
}

//Send request
req.send();