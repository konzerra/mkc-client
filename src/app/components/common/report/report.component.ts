import { Component, OnInit } from '@angular/core';
import {MarkdownService} from "ngx-markdown";
import {MarkdownUseCaseGetByName} from "../../../domain/Markdown/usecase/get/MarkdownUseCaseGetByName";
import {AppMarkdownPages} from "../../../AppMarkdownPages";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  markdown =''
  constructor(
    private mdService: MarkdownService,
    private markdownUseCaseGetByName: MarkdownUseCaseGetByName
  ) { }

  ngOnInit(): void {
    this.markdownUseCaseGetByName.execute(AppMarkdownPages.Report.toString()).subscribe({
      next:(markdown)=>{
        this.markdown = markdown.source
      }
    })
  }

}
