import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/shared/interfaces/photo';
import { PhotoBoardService } from '../../shared/components/photo-board/services/PhotoBoard.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  public photos$: Observable<Photo[]>;

  constructor(private service: PhotoBoardService) {}

  ngOnInit() {
    this.photos$ = this.service.getPhotos();
  }
}
