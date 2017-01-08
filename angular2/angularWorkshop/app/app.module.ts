import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesList } from './core/components/movies-list/movies-list.component';
import { Movie } from './core/components/movie/movie.component';
import { SortMoviesPipe } from './core/pipes/sort-movies';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, MoviesList, Movie, SortMoviesPipe],
    bootstrap: [AppComponent]
})

export class AppModule { }
