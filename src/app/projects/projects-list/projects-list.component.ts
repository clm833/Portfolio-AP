import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectsList = [
    {
      logo: "",
      nombreProyecto: "Mobile Weather App",
      link: "https://github.com/clm833/AppReactNative",
      lenguaje: "React Native",
      fecha: "11/2021",
    },
    {
      logo: "",
      nombreProyecto: "URL Shortener",
      link: "https://github.com/clm833/URL-Shortener",
      lenguaje: "NodeJs",
      fecha: "9/2021",
    },
  ];

}
