import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import MovieDetails from '../../models/movie-details';

@Component({
    selector: '[movie-detailed]',
    templateUrl: './movie-detailed.component.html'
})

export class MovieDetailed implements OnInit, OnDestroy {
    title: string;
    movie: MovieDetails;
    private sub: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
           this.title = params.title;
           MoviesService.getMovies()
            .subscribe(responseJson => {
                for(let item of responseJson) {
                    if (item.title === this.title) {
                        this.movie = new MovieDetails(item);
                    }
                }
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
