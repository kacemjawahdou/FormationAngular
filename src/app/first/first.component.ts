import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
 show = false ;

 colordef = 'red';
  color = this.colordef;
  constructor() { }

  ngOnInit() {
  }

  showhide(paragraphe) {

    console.log(paragraphe);

    this.show = !this.show;
  }

  colorshow(macolor) {
    console.log(macolor);
    this.color = macolor;


  }
def() {

    this.color = this.colordef;

}

}
