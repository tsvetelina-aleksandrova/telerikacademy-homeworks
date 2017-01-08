import { Pipe, PipeTransform } from '@angular/core';

import MovieDetails from '../models/movie-details';

@Pipe({
    name: 'sortMovies'
})

export class SortMoviesPipe implements PipeTransform {

    transform(movies: any[], args: [string, string, string]): MovieDetails[] {
        let [search, sortBy, order] = args,
            compareTitles = (a: any, b: any) => {
                return a[sortBy].toString().localeCompare(b[sortBy].toString());
            },
            piped = movies;

        if (search) {
            search = search.toLowerCase();
            piped = piped.filter((movie) => movie.title.toLowerCase().indexOf(search) > -1);
        }
        if (sortBy) {
            piped.sort(compareTitles);
        }
        if (order === 'desc') {
            piped.reverse();
        }
        return piped;
    }
}
