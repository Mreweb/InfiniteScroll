import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";
import { BlockUI, NgBlockUI } from "ng-block-ui"; 
import { ActivatedRoute, Router } from "@angular/router";


@Injectable({
    providedIn: "root",
})
export class HandleErrorService {

    @BlockUI() blockUI: NgBlockUI;
    
    constructor( 
        private route: ActivatedRoute,
        private router: Router,
        private toastr: ToastrService
    ) {
    }
    // Handling HTTP Errors using Toaster
    public handleError(error: HttpErrorResponse) {
        if (error.status === 500) {
            //  redirect to error page 
            console.log("Errror From Server 500 ");  
            this.toastr.error(error.error.title);
        }
        else if (error.status === 401) {
            //  redirect to error page
            this.router.navigate(['/Login']);
            this.toastr.error("دسترسی به درخواست مقدور نمی باشد");
        }
        else if (error.status === 400) {
            //  redirect to error page
            this.toastr.error(error.error.title);
        }
        else if (error.status === 403) {
            switch (error.error.content) {
                case 'Service.LoginRequired':
                    this.router.navigate(['/Login']);
                    break;
            } 
            this.toastr.error(error.error.message);
        } 
        else {
            // display error message 
            console.log(error);
            this.toastr.error("خطای ارتباط با سرور");
        }
        this.blockUI.stop();

    }
}