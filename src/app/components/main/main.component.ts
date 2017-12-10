import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    providers: []
})
export class MainComponent implements OnInit {


    isOpen: Boolean = false;
    constructor() {
    }

    ngOnInit() {
        console.log('Init MainComponent');
    }


    isOpenUpdate(isOpen: boolean) {
        this.isOpen = isOpen;
    }

}
