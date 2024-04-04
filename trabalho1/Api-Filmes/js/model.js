export class modelo{


    async getFilme (){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjEzODE5MzM0NDlkNWQxNWY3ZDBiNmE2YjFmODdhMSIsInN1YiI6IjYxMTcxNmY0MzUwMzk4MDAyZGI3Yzk1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ys_LkZ7sDiPL14OdvOVP0N5VZr3-IbyR1G4BwIeCLXs'
            }
          };
          
        const response =  await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        const result = await response.json();
        
        return result.result.map(films =>({
            tittle: films.tittle,
            release_date: release_date,
            image: films.poster_path
            
        }))
    }
}