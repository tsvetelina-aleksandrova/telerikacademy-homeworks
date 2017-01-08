import { Component, Input } from '@angular/core';

import MovieDetails from '../../models/movie-details';

@Component({
    selector: '[mvdb-movie-short]',
    templateUrl: './movie.component.html'
})

export class Movie {
    @Input() movie: MovieDetails;
}
