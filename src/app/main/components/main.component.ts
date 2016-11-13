import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { MapComponent } from "./map.component";
@Component({
    selector: 'main',
    templateUrl: './app/main/components/main.html',
    styleUrls: ['./app/main/components/main.css'],
    providers: []
})
export class MainComponent implements OnInit {

 
    isOpen:boolean = false;
    constructor() {
    }

    ngOnInit() {
        console.log("Init MainComponent");
    }


    isOpenUpdate(isOpen : boolean){
        this.isOpen = isOpen;
    }




}