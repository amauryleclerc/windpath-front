import { Component, Input, Output, EventEmitter } from "@angular/core";
import { OnInit } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { Line } from "../models/line";
import { Observable } from "rxjs/Rx";
import { TracksService } from "../services/tracks.service";
import { MapService } from "../services/map.service";
@Component({
    selector: 'player',
    templateUrl: './app/main/components/player.html',
    styleUrls: ['./app/main/components/player.css'],
    providers: []
})
export class PlayerComponent implements OnInit {


    constructor(private tracksService: TracksService, private mapService:MapService) {

    }
    ngOnInit() {
        console.log("Init ToolsBar");
     

    }

 




}