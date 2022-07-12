import { Component, OnInit } from '@angular/core';
import {Tip} from "../../../domain/tip/Tip";

@Component({
  selector: 'app-user-handbook',
  templateUrl: './user-handbook.component.html',
  styleUrls: ['./user-handbook.component.css']
})
export class UserHandbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  tips = new Array<Tip>(
    {
      id:0,
      question:"Какие докумуенты нужны?",
      answer:"Id карта"
    },
    {
      id:2,
      question:"Цена последней версии Iphone?",
      answer:"87 000 сом"
    },
    {
      id:3,
      question:"Какие проценты по кредитам?",
      answer:"Зависит от продуктов"
    },
  );
}
