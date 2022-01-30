import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})


export class SkillListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  listaSkills = {
    'Java': 5,
    'Javascript': 10,
    'HTML': 15,
    'NodeJs': 20,
    'Comunicación': 25,
    'Trabajo en equipo': 30,
    'Resolución de conflictos': 35,
    'Flexibilidad': 40,
    'Resolución de problemas': 45,
    'Ingles': 50,
    'Italiano': 55,
  }
}
