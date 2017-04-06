import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SearchService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor( private searchCom: SearchService ){

  }

}
