import { Component, OnInit, Input, ViewEncapsulation, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectComponent),
      multi: true
    }
  ]
})
export class InputSelectComponent implements ControlValueAccessor {
  @Input() className: string;
  @Input() labelClassName: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() formControlCustom: FormControl;
  @Input() required: boolean;
  @Input() name: string;
  @Input() dataSelect: Array<any> = [];
  value: any;
  selectItems:any;


  ngOnInit() { 
    this.selectItems = this.dataSelect;
    for(let i=0;i<this.dataSelect.length;i++){
      if(this.dataSelect[i].selected == 1){
        this.formControlCustom.setValue(this.dataSelect[i].key);
      }
    }

  }


  private propagateChange = (_: any) => { };
  private propagateTouch = (_: any) => { };
  private isDisabled: boolean = false;
  
  constructor(private cd: ChangeDetectorRef){ 
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
