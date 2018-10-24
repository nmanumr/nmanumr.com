import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scrolled = false;

  constructor() { }

  ngOnInit() {
    document.addEventListener('scroll', ()=>{
      this.scrolled = document.documentElement.scrollTop > 150;
    })
  }

}
