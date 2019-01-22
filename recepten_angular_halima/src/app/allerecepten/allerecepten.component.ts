import { Component, OnInit } from '@angular/core';
import { ReceptService } from './../service/recept.service';

@Component({
  selector: 'app-allerecepten',
  templateUrl: './allerecepten.component.html',
  styleUrls: ['./allerecepten.component.css']
})
export class AllereceptenComponent implements OnInit {

  public receptNaam: string;
  constructor() { }

  ngOnInit() {
  }
  getAllrecept(){
    
  }
}
