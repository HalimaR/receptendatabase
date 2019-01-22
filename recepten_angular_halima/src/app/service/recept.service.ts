import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ReceptService {
    public receptLijst: string[];
    public receptenLijst: string[];
    public toegevoegd: string;
    constructor() { }
    receptToevoegen(renaam, recalorien, reingredienten, retijd ): string{
        var receptNaam: string ='';
        var calorien: string;
        var ingredienten: string;
        var tijd: string;
        if(localStorage.getItem(renaam) != undefined){
            this.toegevoegd = "bestaat al";
        }
        else{
            receptNaam = renaam;
            calorien = recalorien;
            ingredienten = reingredienten;
            tijd = retijd;
            this.receptLijst.push(calorien,ingredienten,tijd);
            localStorage.setItem(renaam,this.receptLijst[])
            this.toegevoegd ="toegevoegd";
        }
        return this.toegevoegd;
    }
    getAllrecepten() {
        for (let i = 0; i < this.receptLijst.length; i++) {
            this.receptenLijst.push(this.receptLijst[i]);
        }
    }
}