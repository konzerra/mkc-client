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
    this.products.push({
      active: true, id: 1, max_duration: 24, max_sum:150000, min_duration: 6, min_sum: 50000, name: "Общий кредит", overview: "", percent: 18
    })
    this.products.push({
      active: true, id: 2, max_duration: 32, max_sum:250000, min_duration: 12, min_sum: 50000, name: "Агро-кредит", overview: "", percent: 14
    })
    this.selectedProduct.setValue(this.products[0])
  }

  onProposal() {
    this.dialogsService.openProposalDialog()
  }
}
