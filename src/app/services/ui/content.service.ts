import { Injectable } from '@angular/core';
import { AdapterService } from '@app/core/services/adapter/adapter.service';
import { HttpRestService } from '@app/core/services/http-rest/http-rest.service';

@Injectable()
export class ContentService extends AdapterService<any>{

  constructor(protected override rest: HttpRestService) {
    super(rest, '');
  } 

  getFakeContent(){
    return 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be usedIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be usedIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be usedIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used';
  }

}
