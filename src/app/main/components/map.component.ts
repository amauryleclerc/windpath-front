import { Component } from "@angular/core";

import { OnInit } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { Line } from "../models/line";
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
    lines: Array<Line> = [];
    center: Pt;
    self: MapComponent = this;
    zoom: Number = 15;
    constructor(private tracksService: TracksService) {
        this.center = new Pt(47.191260,-1.609325,0,0);
    }
    ngOnInit() {
        console.log("Init Map");
        this.tracksService.getTracks().subscribe(tracks => {
            this.tracks.splice(0, this.tracks.length);
            this.lines.splice(0, this.lines.length);

            if (tracks.length > 0) {
                this.center = tracks[tracks.length - 1].center;
            }

            tracks.forEach(track => {
                this.tracks.push(track);
                track.lines.forEach(line => {
                    this.lines.push(line);
                });

            })
        });
    }


}