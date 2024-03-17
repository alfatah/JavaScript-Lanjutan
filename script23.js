$('.search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=f6004623&s=' + $('.input-keyword').val(),
        success: results => {
           const movies = results.Search;
           console.log(movies);
           let cards = '';
           movies.forEach(m => {
            cards += showCards(m);
           });
           $('.movie-container').html(cards);
           
           // ketika tombol detail di-klik
           $('.modal-detail-button').on('click', function() {
            // console.log($(this).data('imdbID'));
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=f6004623&t=' + $(this).data('imdbID'),
                success: x => {
                    const movieDetail = showMovieDetail(x);
                    console.log(x.Title);
                    $('.modal-body').html(movieDetail);
                },
                error: (e) => {
                    console.log(e.responseText);
                }
            });
           });
    
    
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
    
});



function showCards(m) {
    return `<div class="col-md-4 my-3">
                        <div class="card">
                            <img src="${m.Poster}" class="card-img-top">
                            <div class="card-body">
                            <h5 class="card-title">${m.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                            </div>
                        </div>
                    </div>`;
}


function showMovieDetail(x) {
    return `<div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-3">
                                        <img src="${x.Poster}" width="190" height="300" alt="img-fluid">
                                        </div>
                                        <div class="col md">
                                        <ul class="list-group">
                                            <li class="list-group-item"><h4>${x.Title} (${x.Year})</h4></li>
                                            <li class="list-group-item"><strong>Director : </strong> ${x.Director}</li>
                                            <li class="list-group-item"><strong>Actors : </strong> ${x.Actors}</li>
                                            <li class="list-group-item"><strong>Writer : </strong> ${x.Writer}</li>
                                            <li class="list-group-item"><strong>Plot : </strong> ${x.Plot}</li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>`;
}