import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { SearchService } from './search.service';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { HttpRxjsComponent } from './http-rxjs/http-rxjs.component';
import { CompArtistComponent } from './comp-artist/comp-artist.component';
import { CompAlbumComponent } from './comp-album/comp-album.component';
import { FirstLargeLetterPipe } from './first-large-letter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ListAlbumComponent } from './list-album/list-album.component';
import { ListSongsComponent } from './list-songs/list-songs.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { GenresComponent } from './genres/genres.component';
import { InputformComponent } from './inputform/inputform.component';
import { LoginformComponent } from './inputform/loginform.component';
import { MemberComponent } from './member/member.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';

// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyC_fVZh_uYxwF_vvGZWBtNTTqdCsZhvdsU',
    authDomain: 'authapp-665a4.firebaseapp.com',
    databaseURL: 'https://authapp-665a4.firebaseio.com',
    projectId: 'authapp-665a4',
    storageBucket: 'authapp-665a4.appspot.com',
    messagingSenderId: '900126593826'
};

const routesConfig: Routes = [
  {path: '', component: WelcomepageComponent},
  {path: 'album', component: CompAlbumComponent} ,
  {path: 'artist', component: CompArtistComponent},
  {path: 'album-list', component: ListAlbumComponent},
  {path: 'tracks-list', component: ListSongsComponent},
  {path: 'login', component: LoginformComponent},
  {path: 'new-account', component: InputformComponent},
  {path: 'member', component: MemberComponent, canActivate: [AuthService]},
  {path: '**', redirectTo: '', pathMatch: 'full'} 
]

const routerModule = RouterModule.forRoot(routesConfig,{
  enableTracing: false,
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
    ListSongsComponent,
    WelcomepageComponent,
    GenresComponent,
    LoginformComponent,
    InputformComponent,
    MemberComponent,
    FavoriteButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [SearchService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
