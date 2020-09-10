import { Component, OnInit } from '@angular/core';
import { HardCodedAuthService } from '../service/hard-coded-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  constructor(private hardCodedAuthService: HardCodedAuthService) { }

  ngOnInit(): void {
    this.isUserLoggedIn =this.hardCodedAuthService.isUserLoggedIn();
  }

}
