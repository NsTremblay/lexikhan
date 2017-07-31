import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const api = "http://nicolastremblay.ca/api/lexikhan";

@Injectable()
export class ReviewService {

  reviews: Review[];

  constructor(private http: Http) { }

  getAllReviews():Observable<Review[]>{
    return this.http.get(api+"/review/all").map(this.mapReviews);
  }

  getReview(uuid:string){
    return this.http.get(api+"/review/"+uuid).map(this.mapReviews);
  }

  mapReviews(res: Response){
    let response = res.json();
    let reviews: Review [] =[];
    response.forEach(r => {
      let tmpRev = new Review();
      tmpRev.address = r.field_address[0].value;
      tmpRev.author = r.field_author[0].value;
      tmpRev.city = r.field_city[0].value;
      console.log(r.field_google_maps_link);
      tmpRev.google_maps_link = {
        uri:r.field_google_maps_link[0].uri,
        title:r.field_google_maps_link[0].title
      };
      tmpRev.phone_number = r.field_phone_number[0].value;
      tmpRev.priceRange = r.field_price_range[0].value;
      tmpRev.quote = r.field_quote[0].value;
      tmpRev.body = r.body[0].value;
      tmpRev.title = r.title[0].value;
      tmpRev.uuid = r.uuid[0].value;
      tmpRev.images = [];
      r.field_images.forEach(i=>{
        tmpRev.images.push({
          url:i.url,
          alt:i.alt
        })
      })
      reviews.push(tmpRev);
      tmpRev.created = r.created[0].value
    });
    return reviews;
  }

}

export class Review{
  address:string;
  author: string;
  city: string;
  google_maps_link: {
    uri:string,
    title:string
  };
  phone_number: string;
  quote:string;
  priceRange:number;
  uuid:string;
  body:string;
  title:string;
  images:object[];
  created:number;
}
