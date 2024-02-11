import { Injectable } from '@angular/core';
import { AdapterService } from '@app/core/services/adapter/adapter.service';
import { HttpRestService } from '@app/core/services/http-rest/http-rest.service';

@Injectable()
export class GetSampleFileService extends AdapterService<any>{

  constructor(rest:HttpRestService) {
    super(rest,"SampleExcelFile");
  }

}
