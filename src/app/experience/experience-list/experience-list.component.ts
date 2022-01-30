import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experiencesList = [
    {
      logo: "",
      puesto: "Gerente de producción",
      empresa: "Arcor",
      fecha: "01/2014 - actualidad",
    },
    {
      logo: "",
      puesto: "Gerente de producción",
      empresa: "Tregar",
      fecha: "01/2011 - 12/2013",
    },
    {
      logo: "",
      puesto: "Asistente ejecutivo",
      empresa: "Bologna SA",
      fecha: "01/2009 - 09/2010",
    },
  ];

}
