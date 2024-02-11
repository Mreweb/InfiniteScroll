import { BrowserStorageService } from '@app/core/services/storage/browser-storage.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documentState'
})
export class DocumentState implements PipeTransform {

  /**
   *
   */
  constructor() {

  }

  
  transform(content: any): any {
    switch (content) {
      case 1:
        return 'فعال';
      case 2:
        return 'غیرفعال';
      case 3:
        return 'حذف شده';
        case 4:
          return 'تغییر یافته';
          case 5:
            return 'تغییر یافته حذف شده';
      default:
        return 'نامعلوم';

    }
  }

}
