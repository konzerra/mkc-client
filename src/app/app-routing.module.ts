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


const routes : Routes = [
  {path:``, component: HomeComponent},


  //User control
  {path:`${ComponentRoutingPaths.userControl.login}`, component: UserLoginComponent},
  {path:`${ComponentRoutingPaths.userControl.register}`, component: UserRegisterComponent},
  {path:`${ComponentRoutingPaths.userControl.handbook}`, component: UserHandbookComponent, },

  //Proposal
  {path:`${ComponentRoutingPaths.adminControl.proposal.main}`, component: ProposalEditorMainComponent, canActivate:[AuthGuard], data:{role:'Admin'}},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
