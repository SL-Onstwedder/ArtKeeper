import {Component} from '@angular/core';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'input-filter',
  templateUrl: './art-collection-filter.component.html',
  styleUrls: ['./art-collection-filter.component.css'],
})
export class ArtCollectionFilter {
  value = 'Clear me';
}