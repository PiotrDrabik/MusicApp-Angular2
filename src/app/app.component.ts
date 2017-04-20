import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SearchService],
  styleUrls: ['./app.common.css']
})
export class AppComponent implements OnInit {

   constructor(private router: Router) { }

  
  ngOnInit() {
    //scroll page to the top after routing has changed
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
  }

}
