import { Component, OnInit } from '@angular/core';
import {DialogsService} from "../dialogs/dialogs.service";
import {FormControl, Validators} from "@angular/forms";
import {Product} from "../../../domain/product/Product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = new Array<Product>()
  selectedProduct = new FormControl<Product | null>(null)

  constructor(
    private dialogsService:DialogsService
  ) { }

  ngOnInit(): void {
  }

  onProposal() {
    this.dialogsService.openProposalDialog()
  }
}
