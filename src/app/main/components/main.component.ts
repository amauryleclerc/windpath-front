import {Component} from "@angular/core";

import {OnInit} from "@angular/core";


@Component({
    selector: 'main',
    templateUrl: './app/main/components/main.html',
    styleUrls: ['./app/main/components/main.css']
})
export class MainComponent implements OnInit {


    constructor() {

    }

    ngOnInit() {
        console.log("Init MainComponent");
    }


}