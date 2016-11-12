import { Component } from "@angular/core";

import { OnInit } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { TracksService } from "../services/tracks.service";
@Component({
    selector: 'map',
    templateUrl: './app/main/components/map.html',
    styleUrls: ['./app/main/components/map.css'],
    providers: [TracksService]
})
export class MapComponent implements OnInit {

    tracks: Array<Track>;
    lat: number = 47.191260;
    lng: number = -1.609325;
    constructor(private tracksService: TracksService) {
        this.tracks = tracksService.getTracks();
    }

    ngOnInit() {
        console.log("Init Map a");
        console.log(this.tracks);
    }


}