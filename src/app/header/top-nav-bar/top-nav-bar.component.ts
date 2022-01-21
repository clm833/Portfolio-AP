import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  socialMediaList = {
    linkedin: "https://www.linkedin.com/in/cristianlm/",
    github: "https://github.com/clm833",
    facebook: "#",
    instagram: "#",
  };
}
