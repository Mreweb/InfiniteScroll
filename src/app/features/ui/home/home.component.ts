import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from 'ngx-toastr';
import { ContentService } from '@app/services/ui/content.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserStorageService } from '@app/core/services/storage/browser-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ContentService: ContentService,
    private storage: BrowserStorageService,
    private toastr: ToastrService
  ) { }
  @BlockUI() blockUI: NgBlockUI;

  mainPageContent = "";
  pageForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    captchaCode: new FormControl('', [Validators.required]),
    captchaId: new FormControl('', [Validators.required])
  });

  getContent() {
    this.mainPageContent += this.ContentService.getFakeContent();
  }

  ngOnInit(): void {
    this.mainPageContent = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be usedIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be usedIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be usedIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used';
    this.getContent();
  }

  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.getContent();
    }
  }


}