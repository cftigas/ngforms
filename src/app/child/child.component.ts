import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('myAwesomeValue') myBadValue;
  @Output()myoutput = new EventEmitter();
  constructor() { }

  ngOnInit() {
  	console.log(this.myBadValue, "is what i got");
  	this.myoutput.emit('hello from the otherside');
  }

}
