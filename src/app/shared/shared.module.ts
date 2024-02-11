import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedRoutingModule } from "@app/shared/shared-routing.module";
import { ValidationMessageComponent } from './componentes/Input-layout/validation-message/validation-message.component';
import { InputTextComponent } from './componentes/Input-layout/input-text/input-text.component';
import { InputNumberComponent } from './componentes/Input-layout/input-number/input-number.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HtmlToPlaintextPipe } from './pipes/html-to-plaintext.pipe';
import { GetSampleFileService } from "@app/shared/services/get-sample-file.service";
import { CutText } from "@app/shared/pipes/cut-Text.pipe"; 
import { SafeUrlPipe } from "@app/shared/pipes/safe-url.pipe";
import { AuthorizeService } from "@app/shared/services/admin-auth.service";
import { InputSelectComponent } from "./componentes/Input-layout/input-select/input-select.component";
import { InputCheckBoxComponent } from "./componentes/Input-layout/input-checkbox/input-checkbox.component";
import { BakcButtonComponent } from "./componentes/Input-layout/back-button/back.component";
import { PersianCalendarService } from "./services/persian-date.service";
import { DocumentState } from "./pipes/document-State.pipe";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,  
    ReactiveFormsModule,
    SharedRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ValidationMessageComponent,
    InputNumberComponent,
    InputTextComponent,
    InputCheckBoxComponent,
    InputSelectComponent,
    NgxPaginationModule,
    HtmlToPlaintextPipe,
    BakcButtonComponent,
    SafeUrlPipe,
    CutText,
    DocumentState
  ],
  providers:[
    PersianCalendarService,
    GetSampleFileService,
    AuthorizeService
  ],
  declarations: [ValidationMessageComponent ,InputNumberComponent ,InputTextComponent , InputCheckBoxComponent, HtmlToPlaintextPipe , SafeUrlPipe ,CutText , DocumentState ,InputSelectComponent , BakcButtonComponent  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
