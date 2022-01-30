import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills/skills.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    SkillsComponent,
    SkillListComponent,
    ProgressBarComponent,
  ],
  exports: [
    SkillsComponent,
],
  imports: [
    CommonModule
  ]
})
export class SkillsModule { }




