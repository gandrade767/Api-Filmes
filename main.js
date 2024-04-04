import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './img/add.png';
import Logo1 from './img/download-removebg-preview.png';
import { useState, useEffect } from 'react';

function Home() {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'; // Base URL para imagens
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjEzODE5MzM0NDlkNWQxNWY3ZDBiNmE2YjFmODdhMSIsInN1YiI6IjYxMTcxNmY0MzUwMzk4MDAyZGI3Yzk1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ys_LkZ7sDiPL14OdvOVP0N5VZr3-IbyR1G4BwIeCLXs'
        }
    };

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
                console.log(data.results);
            })
            .catch(err => console.error(err));

        fetch('https://api.themoviedb.org/3/movie/:movie_id:/images', options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }, []); //dependências vazias, significa que o useEffect será executado apenas uma vez, após a montagem do componente

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid bg-primary">
                    <nav className="navbar custom">
                        <div className="container">
                            <a className="navbar-brand" href="#">
                                <img src={Logo1} alt="Logo" width="200" className="d-inline-block align-text-top" />
                            </a>
                        </div>
                    </nav>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Filmes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Séries</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Pessoas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Mais</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <img src={Logo} alt="Logo" width="35" className="d-inline-block align-text-top" />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">PT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Iniciar Sessão</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1>Filmes Populares</h1>
            <div className='container'>
                <div className='row'>
                    {movies && movies.map(movie => (
                        <div className='col' key={movie.id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={`${imageBaseUrl}${movie.poster_path}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">{movie.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
//
export default Home;
