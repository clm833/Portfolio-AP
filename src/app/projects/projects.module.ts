import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsItemComponent } from './projects-item/projects-item.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectsItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectsComponent
  ],
})
export class ProjectsModule { }
