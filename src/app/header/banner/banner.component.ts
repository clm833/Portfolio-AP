import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  bannerImg = {'backgroundImage' : 'url(./assets/img/4.jpg)'};
  avatarImg = {'backgroundImage' : 'url(./assets/img/p1.jpg)'};
}
