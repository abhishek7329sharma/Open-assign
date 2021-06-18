import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  header_variable=false;
  logo_variable=false;
 

  @HostListener("document:scroll")
scrollFunction(){
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop >0) {
    this.header_variable = true
    this.logo_variable = true
  } else {
    this.header_variable = false
    this.logo_variable = false
  }
}
  

}
