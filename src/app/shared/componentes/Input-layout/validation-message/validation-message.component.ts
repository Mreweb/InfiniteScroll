import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css']
})
export class ValidationMessageComponent implements OnInit {
  @Input() message:string;
  @Input() variable:any;
  @Input() arrow:string;
  @Input() require:boolean;
  @Input() notDirty:boolean;
  class="ui basic  red  pointing"
  constructor() { }
  
  
 
  ngOnInit() {
   
  }

}
