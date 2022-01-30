import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent implements OnInit {

  @Input() titulo: String = '';
  @Input() institucion: String = '';
  @Input() fecha: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
