import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})


export class FeedbackPage {

  constructor(public http: HttpClient,) { 
    this.getFeedbackClient()
    this.getFeedbackChauffeur()
  }
  feedback_client=[]
  feedback_chauffeur=[]

  getFeedbackClient()
  {
    this.http.get('http://localhost/myapp/feedback/get-feedback-client.php').subscribe(data=>{
    this.feedback_client=<Array<any>>data
    })
  }
  getFeedbackChauffeur()
  {
    this.http.get('http://localhost/myapp/feedback/get-feedback-chauffeur.php').subscribe(data=>{
    this.feedback_chauffeur=<Array<any>>data
    })
  }
}

