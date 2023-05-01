import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GenreModule } from './genre/genre.module';
import { ActorsModule } from './actors/actors.module';
import { MovieModule } from './movie/movie.module';
import { CoffeeListComponent } from './coffee/coffee-list/coffee-list.component';
import { CoffeeDetailComponent } from './coffee/coffee-detail/coffee-detail.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, CoffeeListComponent, CoffeeDetailComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    GenreModule,
    ActorsModule,
    MovieModule,
  ],
})
export class AppModule {}
