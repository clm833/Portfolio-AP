import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { EducationListComponent } from './education-list/education-list.component';
import { EducationItemComponent } from './education-item/education-item.component';



@NgModule({
  declarations: [
    EducationComponent,
    EducationListComponent,
    EducationItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EducationComponent
  ]
})
export class EducationModule { }
