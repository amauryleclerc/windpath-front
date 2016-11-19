import { Component, Input, Output, EventEmitter } from "@angular/core";
import { OnInit } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { Line } from "../models/line";
import { Observable } from "rxjs/Rx";
import { TracksService } from "../services/tracks.service";
import { MapService } from "../services/map.service";
import { PlayerService } from "../services/player.service";
@Component({
    selector: 'player',
    templateUrl: './app/main/components/player.html',
    styleUrls: ['./app/main/components/player.css'],
    providers: []
})
export class PlayerComponent implements OnInit {


    speed:number = 1;
    isPlaying:boolean = false;
    constructor(private playerService: PlayerService) {

    }
    ngOnInit() {
        console.log("Init ToolsBar");
        this.playerService.getSpeed().subscribe(speed =>{
            this.speed = 1000/speed;
        });
        this.playerService.isPlaying().subscribe(v =>{
            this.isPlaying =v;
        });
    }

    play() {
        this.playerService.play();
    }
    pause() {
        this.playerService.pause();
    }
    faster() {
        this.playerService.faster();
    }
    slower() {
        this.playerService.slower();
    }

}