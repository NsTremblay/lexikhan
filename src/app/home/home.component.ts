import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatesService } from '../service/states.service';
import { AppComponent } from '../app.component';
import { ReviewService, Review } from '../service/review.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reviews: Review[] = [];
  reviewsForCurrentCity: Review[] = [];

  constructor(private route: ActivatedRoute,
    public states: StatesService,
    private app: AppComponent,
    private review: ReviewService) {
  }

  ngOnInit() {
    //get the current city to show the required background image
    let sub = this.route.params.subscribe(params => {
      this.states.currentCity = params['location'];
      this.app.changebackground(this.states.currentCity);
      
      //get all of the reviews and list them
      this.getReviews();

    });

  }

  getReviews() {

    if (this.reviews.length == 0) {
      this.review.getAllReviews().subscribe(r => {
        this.reviews = r;
        this.review.reviews = r;
        this.reviewsForCurrentCity = this.reviews.filter(r => r.city == this.states.currentCity);
        console.log(this.reviewsForCurrentCity);
        return
      });
    } else {
      //filter the reviews and only show the ones for the current city
      this.reviewsForCurrentCity = this.reviews.filter(r => r.city == this.states.currentCity);
      return;
    }
  }




}
