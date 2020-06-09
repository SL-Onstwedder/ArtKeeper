import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-art-collection-dashboard',
  templateUrl: './art-collection-dashboard.component.html',
  styleUrls: ['./art-collection-dashboard.component.css']
})
export class ArtCollectionDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Symbiosis 110-11', image:"https://s3-eu-west-1.amazonaws.com/img.exto.nl/929-o-331233135.jpg", cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Symbiosis 110-11', image:"https://s3-eu-west-1.amazonaws.com/img.exto.nl/929-o-331233135.jpg" , cols: 1, rows: 1 },
        { title: 'Symbiosis 130-21', image:"https://s3-eu-west-1.amazonaws.com/img.exto.nl/929-o-331232611.jpg", cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
