import { Component, OnInit, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BakcButtonComponent),
      multi: true
    }
  ]
})
export class BakcButtonComponent {
  @Input() className: string;
  @Input() labelClassName: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() formControlCustom: FormControl;
  @Input() required: boolean;
  @Input() value = false;
    
    private propagateChange = (_: any) => { };
    private propagateTouch = (_: any) => { };
    private isDisabled: boolean = false;
    
    constructor(
      private _location: Location){

    }
    back(): void {
      this._location.back();
    }
  
}
