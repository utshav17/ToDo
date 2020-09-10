import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name =''
  //activated Route
  constructor(private route:ActivatedRoute) { }


  ngOnInit(): void {
  this.name= this.route.snapshot.params['name'];

  }

}
