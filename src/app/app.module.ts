import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/common/header/header.component";
import {HomeComponent} from "./components/common/home/home.component";
import {AuthGuard} from "./_auth/auth.guard";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./_auth/auth.interceptor";
import {DialogsService} from "./components/common/dialogs/dialogs.service";
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatConfirmDialogComponent} from "./components/common/dialogs/mat-confirm-dialog/mat-confirm-dialog.component";
import {MatInfoDialogComponent} from "./components/common/dialogs/mat-info-dialog/mat-info-dialog.component";
import {MarkdownModule} from "ngx-markdown";
import {AngularMaterialModule} from "./angular-material/angular-material.module";
import {MatIconModule} from "@angular/material/icon";
import {UserRegisterComponent} from "./components/user-control/user-register/user-register.component";
import {UserLoginComponent} from "./components/user-control/user-login/user-login.component";
import {UserHandbookComponent} from "./components/user-control/user-handbook/user-handbook.component";
import { ProposalEditorMainComponent } from './components/admin-control/proposal/proposal-editor-main/proposal-editor-main.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { MarkdownEditorMainComponent } from './components/admin-control/markdown/markdown-editor-main/markdown-editor-main.component';
import { MarkdownEditorSaveComponent } from './components/admin-control/markdown/markdown-editor-save/markdown-editor-save.component';
import { MarkdownEditorUpdateComponent } from './components/admin-control/markdown/markdown-editor-update/markdown-editor-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MatConfirmDialogComponent,
    MatInfoDialogComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserHandbookComponent,
    ProposalEditorMainComponent,
    MarkdownEditorMainComponent,
    MarkdownEditorSaveComponent,
    MarkdownEditorUpdateComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MarkdownModule.forRoot(),
        AngularMaterialModule,
        MatIconModule,
        ReactiveFormsModule,
        NgxPaginationModule,
    ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },
    DialogsService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MatConfirmDialogComponent,
    MatInfoDialogComponent,]
})
export class AppModule { }
