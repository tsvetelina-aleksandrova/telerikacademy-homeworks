import { Routes } from '@angular/routes';

import { MoviesList } from './core/components/movies-list/movies-list.component';
import { MovieShort } from './core/components/movie-short/movie-short.component';
import { MovieDetailed } from './core/components/movie-detailed/movie-detailed.component';

export  const appRoutes: Routes = [
    { path: 'top', component: MoviesList },
    { path: ':title/details', component: MovieDetailed},
    { path: '**', component: MoviesList}
];
