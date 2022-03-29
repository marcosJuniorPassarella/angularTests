import { Component, OnInit } from '@angular/core';
import { PhotoBoardService } from './shared/components/photo-board/services/PhotoBoard.service';
import { Observable } from 'rxjs';
import { Photo } from './shared/interfaces/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular testing';
  // $ no nome da propriedade para indicar que é um Observable
  public photos$: Observable<Photo[]>;

  constructor(private service: PhotoBoardService) {}

  public ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}
