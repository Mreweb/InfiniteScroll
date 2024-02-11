import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlToPlaintext'
})
export class HtmlToPlaintextPipe implements PipeTransform {

  transform(text: any, args?: any): any {
    return text ? String(text).replace(/\<(?!img|br).*?\>   /g || '&quote;' || '&zwnj;' , "") : ""; 
  }

}
