import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCardModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { routing } from './app.routes';

import { DataService } from './services/data.service';
import { CollaborationService } from './services/Collaboration.service';

import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { AppComponent } from './app.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProblemAddFormComponent } from './components/problem-add-form/problem-add-form.component';
import { AceComponent } from './components/ace/ace.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NavBarComponent,
    ProblemAddFormComponent,
    AceComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MdButtonModule, 
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    MdDialogModule,
    routing
  ],
  providers: [{
    provide: "data",
    useClass: DataService
  },
  {
    provide: "collaboration",
    useClass: CollaborationService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
