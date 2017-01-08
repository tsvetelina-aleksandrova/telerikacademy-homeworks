import { Component, OnInit } from '@angular/core';

import MovieDetails from '../../models/movie-details';
import { MoviesService } from '../../services/movies';

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
        MoviesService.getMovies()
            .subscribe(responseJson => {
                for(let item of responseJson) {
                    this.movies.push(new MovieDetails(item));
                }
            });
    }
}
