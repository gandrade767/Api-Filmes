const showFilms = (films) =>{
    films.forEach(films => {
        const render = `
        <div class="card">
            <div >
                <img src="https://image.tmdb.org/t/p/w500${}" alt="imgem filme">
            </div>
            <div class="content">
                <p>${}</p>
                <p>${}</p>
                <p>${}</p>
            </div>
        </div>
        `
    });
}