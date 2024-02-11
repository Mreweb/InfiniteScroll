import { Injectable, Inject } from '@angular/core';
import { IapiUrlSetting } from '../interfaces/iapi-url-setting';
import { APP_CONFIG, AppConfig, APP_DI_CONFIG } from '../config/app.config';


@Injectable()
export class ApiUrlSetting implements IapiUrlSetting {

    queryApiUrl: string;

    constructor(@Inject(APP_CONFIG) config: AppConfig) {
        this.queryApiUrl = "";
    }


   
  getQueryApiUrl(apiOption: string = ''): string {
      this.queryApiUrl = APP_DI_CONFIG.ApiEndPoint+apiOption;
      return this.queryApiUrl;
    }

}
