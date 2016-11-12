import { Component } from "@angular/core";

import { OnInit } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { TracksService } from "../services/tracks.service";
import { Observable } from "rxjs/Rx";
@Component({
    selector: 'map',
    templateUrl: './app/main/components/map.html',
    styleUrls: ['./app/main/components/map.css'],
    providers: []
})
export class MapComponent implements OnInit {

    tracks: Array<Track> = [];
    lat: number = 47.191260;
    lng: number = -1.609325;

    constructor(private tracksService: TracksService) {

    }
    ngOnInit() {
        console.log("Init Map");
        this.tracksService.getTracks().subscribe(tracks => {
            console.log("sub");
         //   this.tracks = tracks;
                this.tracks.splice(0,this.tracks.length)
                tracks.forEach(track => {
                    console.log(track);
                    this.tracks.push(track);
                })
        });
    }


}