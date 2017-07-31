import { Component, OnInit } from '@angular/core';
import { ReviewService, Review } from '../service/review.service';
import { StatesService } from '../service/states.service';
import { AppComponent } from '../app.component';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  review:Review;

  constructor(private route: ActivatedRoute,private reviewS: ReviewService, private stateS: StatesService,
    private app: AppComponent) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let uuid = params['uuid'];      
      //get the review for the current uuid
      this.getReview(uuid);
    });
  }

  getReview(uuid:string){
    this.reviewS.getReview(uuid).subscribe(r=>{
      this.review = r[0];
      this.stateS.currentCity = r[0].city;
      this.app.changebackground(this.stateS.currentCity);
    })
  }

}
