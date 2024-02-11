import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { Title } from "@angular/platform-browser";
import { TitleStrategy,  RouterStateSnapshot } from "@angular/router";
import { HomeComponent } from './features/ui/home/home.component';
const routes: Routes = [
  { path: "",  title: "Infinite Scroll" , component: HomeComponent }
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule { }
