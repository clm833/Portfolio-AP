import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-item',
  templateUrl: './projects-item.component.html',
  styleUrls: ['./projects-item.component.scss']
})
export class ProjectsItemComponent implements OnInit {

  @Input() nombreProyecto: String = '';
  @Input() link: String = '';
  @Input() lenguaje: String = '';
  @Input() fecha: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
