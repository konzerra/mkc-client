import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/common/home/home.component";
import {ComponentRoutingPaths} from "./components/ComponentRoutingPaths";
import {UserLoginComponent} from "./components/user-control/user-login/user-login.component";
import {UserRegisterComponent} from "./components/user-control/user-register/user-register.component";
import {UserHandbookComponent} from "./components/user-control/user-handbook/user-handbook.component";
import {AuthGuard} from "./_auth/auth.guard";
import {
  ProposalEditorMainComponent
} from "./components/admin-control/proposal/proposal-editor-main/proposal-editor-main.component";
import {
  MarkdownEditorMainComponent
} from "./components/admin-control/markdown/markdown-editor-main/markdown-editor-main.component";
import {
  MarkdownEditorSaveComponent
} from "./components/admin-control/markdown/markdown-editor-save/markdown-editor-save.component";
import {
  MarkdownEditorUpdateComponent
} from "./components/admin-control/markdown/markdown-editor-update/markdown-editor-update.component";
import {AboutComponent} from "./components/common/about/about.component";
import {ReportComponent} from "./components/common/report/report.component";


const routes : Routes = [
  {path:``, component: HomeComponent},
  {path:`${ComponentRoutingPaths.common.about}`, component: AboutComponent},
  {path:`${ComponentRoutingPaths.common.report}`, component: ReportComponent},

  //User control
  {path:`${ComponentRoutingPaths.userControl.login}`, component: UserLoginComponent},
  {path:`${ComponentRoutingPaths.userControl.register}`, component: UserRegisterComponent},
  {path:`${ComponentRoutingPaths.userControl.handbook}`, component: UserHandbookComponent, },


  //Admin control
  //Proposal
  {path:`${ComponentRoutingPaths.adminControl.proposal.main}`, component: ProposalEditorMainComponent, canActivate:[AuthGuard], data:{role:'Admin'}},

  //Markdown
  {path:`${ComponentRoutingPaths.adminControl.markdown.main}`, component: MarkdownEditorMainComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.markdown.save}`, component: MarkdownEditorSaveComponent, canActivate:[AuthGuard], data:{role:'Admin'}},
  {path:`${ComponentRoutingPaths.adminControl.markdown.update}`, component: MarkdownEditorUpdateComponent, canActivate:[AuthGuard], data:{role:'Admin'}},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
