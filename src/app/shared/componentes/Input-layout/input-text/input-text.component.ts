import { Component, OnInit, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements  ControlValueAccessor {
  @Input() className: string;
  @Input() labelClassName: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() formControlCustom: FormControl;
  @Input() required: boolean;
  @Input() value = false;
  @Input() maxLength:string;
    
    private propagateChange = (_: any) => { };
    private propagateTouch = (_: any) => { };
    private isDisabled: boolean = false;
    
    constructor(){

    }
    writeValue(value: any): void {
        if (value) {
            this.value = value;
        }
    }
    
    registerOnChange(fn: (_: any) => void): void {
       // this.propagateChange = fn;
    }
    registerOnTouched(fn: () => void): void {
       // this.propagateTouch = fn;
    } 
    setDisabledState(isDisabled: boolean): void {
      //  this.isDisabled = isDisabled;
      }
}
