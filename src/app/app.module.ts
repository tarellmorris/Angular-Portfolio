import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsFeedComponent } from './projects-feed/projects-feed.component';
import { AboutBarComponent } from './about-bar/about-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { InfographicMicropageComponent } from './projects-feed/projects/infographic-micropage/infographic-micropage.component';
import { BobsBurgersComponent } from './projects-feed/projects/bobs-burgers/bobs-burgers.component';
import { RockPaperScissorsComponent } from './projects-feed/projects/rock-paper-scissors/rock-paper-scissors.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'projects', component: ProjectsFeedComponent},
  {path: 'about', component: AboutBarComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'projects/infographic-micropage', component: InfographicMicropageComponent},
  {path: 'projects/bobs-burgers-homepage', component: BobsBurgersComponent},
  {path: 'projects/rock-paper-scissors', component: RockPaperScissorsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsFeedComponent,
    AboutBarComponent,
    HomepageComponent,
    FooterComponent,
    ContactComponent,
    InfographicMicropageComponent,
    BobsBurgersComponent,
    RockPaperScissorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
    BrowserAnimationsModule,
    NgbModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
