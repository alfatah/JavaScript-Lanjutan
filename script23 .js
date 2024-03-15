$.ajax({
    url: 'http://www.omdbapi.com/?apikey=f6004623&t=avengers&plot=full',
    success: results => {
        console.log(results);
    }
});