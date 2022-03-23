import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/uniqueId/unique-id.service';

@NgModule({
  declarations: [
    LikeWidgetComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [UniqueIdService],
  exports: [LikeWidgetComponent],
})
export class LikeWidgetModule {}
