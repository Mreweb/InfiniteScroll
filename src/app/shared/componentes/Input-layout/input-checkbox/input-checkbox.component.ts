import { Component, OnInit, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckBoxComponent),
      multi: true
    }
  ]
})
export class InputCheckBoxComponent implements  ControlValueAccessor {
  @Input() className: string;
  @Input() labelClassName: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() formControlCustom: FormControl;
  @Input() required: boolean;
  @Input() value = false;
  @Input() isChecked = false;
    
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
        this.propagateChange = fn;
    }
    registerOnTouched(fn: () => void): void {
        this.propagateTouch = fn;
    }
    
    private onChange(event : any) {
        this.propagateChange(this.value);
    }

    private onTouch(event : any){
        this.propagateTouch(event);
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
      }
}
