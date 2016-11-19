import { Component, Input, Output, EventEmitter } from "@angular/core";
import { OnInit } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { Observable } from "rxjs/Rx";
import { PlayerService } from "../services/player.service";

@Component({
    selector: 'player',
    templateUrl: './app/main/components/player.html',
    styleUrls: ['./app/main/components/player.css'],
    providers: []
})
export class PlayerComponent implements OnInit {


    playerSpeed:number = 1;
    speed:String;
    isPlaying:boolean = false;
    constructor(private playerService: PlayerService ) {

    }
    ngOnInit() {
        console.log("Init ToolsBar");
        this.playerService.getSpeed().subscribe(speed =>{
            this.playerSpeed = 1000/speed;
        });
        this.playerService.isPlaying().subscribe(v =>{
            this.isPlaying =v;
        });
          this.playerService.getPosition().map(p => p.getSpeedLabel()).subscribe(s =>{
              this.speed = s;
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