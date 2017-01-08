import { Http, Response } from '@angular/http';

export class MoviesService {

    constructor(private http: Http) {}

    static getMovies(): Observable {
        return this.http.get('data/movies.json')
            .map((res: Response) => res.json());
    }
}
