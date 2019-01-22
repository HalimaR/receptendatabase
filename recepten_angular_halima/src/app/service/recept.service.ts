import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ReceptService {
    public receptLijst: string[];
    public receptenLijst: string[];
    public toegevoegd: string;
    constructor() { }
    receptToevoegen(renaam, recalorien, reingredienten, retijd): Array<string>{
        var receptNaam: string ='';
        var calorien: string;
        var ingredienten: string;
        var tijd: string;
        if(localStorage.getItem(renaam) != undefined){
            console.log("bestaat al");
        }
        else{
            receptNaam = renaam;
            calorien = recalorien;
            ingredienten = reingredienten;
            tijd = retijd;
            this.receptLijst.push(calorien,ingredienten,tijd);
            localStorage.setItem(renaam,this.receptLijst[])
            console.log("toegevoegd");
        }
        return this.receptLijst;
    }
    getAllrecepten(receptlijst): Array<string>{
        for (let i = 0; i < receptlijst.length; i++) {
            this.receptenLijst.push(receptlijst[i]);
        }
        return this.receptenLijst;
    }
}