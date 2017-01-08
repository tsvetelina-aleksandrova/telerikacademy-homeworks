import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesList } from './core/components/movies-list/movies-list.component';
import { MovieShort } from './core/components/movie-short/movie-short.component';
import { MovieDetailed } from './core/components/movie-detailed/movie-detailed.component';
import { SortMoviesPipe } from './core/pipes/sort-movies';
import { appRoutes } from './app.routes';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, MoviesList, MovieShort, MovieDetailed, SortMoviesPipe],
    bootstrap: [AppComponent]
})

export class AppModule { }
