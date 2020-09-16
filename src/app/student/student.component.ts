import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input() parentdata;
 @Output() studentEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
   taskEvent(){
       this.studentEvent.emit(' I have done my assignement susscessfully');
   }
}
