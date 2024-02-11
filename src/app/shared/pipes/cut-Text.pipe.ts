import { BrowserStorageService } from '@app/core/services/storage/browser-storage.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutText implements PipeTransform {

  /**
   *
   */
  constructor() {

  }
  transform(content: string): any {
    if (content) {
      if (content.length >= 20) {
        return content.substring(0, 20) + "...";
      }
      return content;
    }
  }

}
