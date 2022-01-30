import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceItemComponent } from './experience-item/experience-item.component';



@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceListComponent,
    ExperienceItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
