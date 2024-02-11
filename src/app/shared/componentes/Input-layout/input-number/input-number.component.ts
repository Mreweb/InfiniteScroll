import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {
  @Input() fieldWide:string;
  @Input() label:string;
  @Input() placeholder:string;
  @Input() _input:FormControl;
  @Input() arrow:string;
  @Input() required:boolean;
  @Input() inputLabel:string;
  @Input() name:string;
  @Input() min:number;
  @Input() max:number;
  @Input() step:number;
  @Input() disabled:boolean=true;
  @Input() warning:string;
  
  focus:boolean=false;
  constructor() { }

  ngOnInit() { 

  }

}
