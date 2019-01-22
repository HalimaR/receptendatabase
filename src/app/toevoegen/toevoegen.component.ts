import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ReceptService } from './../service/recept.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-toevoegen',
  templateUrl: './toevoegen.component.html',
  styleUrls: ['./toevoegen.component.css']
})
export class ToevoegenComponent implements OnInit {

  public receptNaam: string;
  public calorien: string;
  public ingredienten: string;
  public tijd: string;
  public toevoegen: string;
  receptForm: FormGroup;
  constructor(private receptservice: ReceptService) { }

  ngOnInit() {
    this.receptForm = new FormGroup({
      receptNaam: new FormControl(''),
      calorien: new FormControl(''),
      ingredienten: new FormControl(''),
      tijd: new FormControl('')
    })
  }
  onSubmit(){
    this.receptNaam = this.receptForm.value.receptNaam;
    this.calorien = this.receptForm.value.calorien;
    this.ingredienten = this.receptForm.value.ingredienten;
    this.tijd = this.receptForm.value.tijd;
    this.toevoegen = this.receptservice.receptToevoegen(this.receptNaam, this.calorien, this.ingredienten, this.tijd);
    console.log(this.toevoegen);
  }
}
