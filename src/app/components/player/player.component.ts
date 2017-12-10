import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Track } from '../../models/track';
import { Pt } from '../../models/pt';
import { Observable } from 'rxjs/Observable';
import { PlayerService } from '../../services/player.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],
    providers: []
})
export class PlayerComponent implements OnInit {


    playerSpeed: Number = 1;
    speed: String;
    isPlaying: Boolean = false;
    constructor(private playerService: PlayerService ) {

    }
    ngOnInit() {
        console.log('Init Player');
        this.playerService.getSpeed().subscribe(speed => {
            this.playerSpeed = 1000 / speed;
        });
        this.playerService.isPlaying().subscribe(v => {
            this.isPlaying = v;
        });
          this.playerService.getPosition()//
          .map(p => p.getSpeedLabel())//
          .subscribe(s => {
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
