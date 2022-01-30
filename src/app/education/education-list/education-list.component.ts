import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.scss']
})
export class EducationListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  educationList = [
    {
      logo: "",
      titulo: "Fullstack developer - NodeJs",
      institucion: "Dev School",
      fecha: "oct-2016",
    },
    {
      logo: "",
      titulo: "UX/UI",
      institucion: "Dev School",
      fecha: "may-2016",
    },
  ];

}
