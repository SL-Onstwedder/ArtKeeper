import {Component} from '@angular/core';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'art-collection-gridlist',
  templateUrl: './art-collection-gridlist.component.html',
  styleUrls: ['./art-collection-gridlist.component.css'],
})
export class ArtKeeperGridlistComponent {
  value = 'Clear me';
}