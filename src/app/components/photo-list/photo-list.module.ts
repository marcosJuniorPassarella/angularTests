import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoBoardModule } from '../../shared/components/photo-board/photo-board.module';
import { PhotoListComponent } from './photo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [CommonModule, PhotoBoardModule, FontAwesomeModule],
  exports: [PhotoListComponent],
})
export class PhotoListModule {}
