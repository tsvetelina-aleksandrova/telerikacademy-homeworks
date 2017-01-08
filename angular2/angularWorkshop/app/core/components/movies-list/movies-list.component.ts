import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import MovieDetails from '../../models/movie-details';

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html'
})

export class MoviesList implements OnInit {
    movies: MovieDetails[];
    pageTitle: string;
    orderOptions: string[];
    sortOptions: string[];
    search: string;
    sort: string;
    order: string;

    constructor(private http: Http) {
        this.movies = [];
        this.pageTitle = 'Top 10 iMDB Movies';
        this.orderOptions = ['asc', 'desc'];
        this.sortOptions = ['poster', 'title', 'year', 'imdbRating'];
    }

    ngOnInit() {
        this.http.get('data/movies.json')
            .map((res: Response) => res.json())
            .subscribe(responseJson => {
                for(let item of responseJson) {
                    this.movies.push(new MovieDetails(item));
                }
            });
    }
}
