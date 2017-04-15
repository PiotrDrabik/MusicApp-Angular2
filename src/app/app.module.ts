import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpRxjsComponent } from './http-rxjs/http-rxjs.component';
import { CompArtistComponent } from './comp-artist/comp-artist.component';
import { CompAlbumComponent } from './comp-album/comp-album.component';
import { FirstLargeLetterPipe } from './first-large-letter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ListAlbumComponent } from './list-album/list-album.component';
import { ListSongsComponent } from './list-songs/list-songs.component';


const routesConfig: Routes = [
  {path:'', component: CompArtistComponent},
  {path:'album', component: CompAlbumComponent} ,
  {path:'artist', component: CompArtistComponent},
  {path:'album-list', component: ListAlbumComponent},
  {path:'tracks-list', component: ListSongsComponent},
  {path:'**', redirectTo: '', pathMatch:'full'} //** - każde zapytanie
]

const routerModule = RouterModule.forRoot(routesConfig,{
  enableTracing: true,
  useHash: false
})

@NgModule({
  declarations: [
    AppComponent,
    HttpRxjsComponent,
    CompArtistComponent,
    CompAlbumComponent,
    FirstLargeLetterPipe,
    ListAlbumComponent,
    ListSongsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
