import { Component, Input } from '@angular/core';

import MovieDetails from '../../models/movie-details';

@Component({
    selector: '[movie-short]',
    templateUrl: './movie-short.component.html'
})

export class MovieShort {
    @Input() movie: MovieDetails;
}
