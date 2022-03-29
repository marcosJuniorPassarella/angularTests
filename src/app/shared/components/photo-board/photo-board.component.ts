import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['photo-board.component.scss'],
})
export class PhotoBoardComponent implements OnChanges {
  @Input() public photos: Photo[];
  public rows: any[][] = [];

  ngOnChanges(changes: SimpleChanges): void {
    // é disparado toda vez que uma input property do meu componente for alterada
    if (changes.photos) {
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  private groupColumns(photos: Photo[]): any[][] {
    const newRows = [];
    const step = 4;
    for (let index = 0; index < photos.length; index += step) {
      newRows.push(photos.slice(index, index + step));
    }
    return newRows;
  }
}
