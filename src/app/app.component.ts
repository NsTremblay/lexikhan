import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatesService } from './service/states.service';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  
  @HostBinding('style.background-image')
  background:string;

  constructor(private route:ActivatedRoute,
    private states: StatesService) {
    }
  

  ngOnInit(){
  }

  changebackground(back :string){
    if(this.states.currentCity=="ottawa"){
      this.background = 'url("/assets/Ottawa_at_night_Ottawa_Tourism.jpg")';
    }else if(this.states.currentCity=="toronto"){
      this.background = 'url("/assets/cn-tower-canada.jpg")';
    }else if(this.states.currentCity=="montreal"){
      this.background = 'url("/assets/large-montreal.jpg")';
    }
  }

  currentBold(city:string){
    if(city===this.states.currentCity){
      return "800";
    }else{
      return "100";
    }
  }
}
