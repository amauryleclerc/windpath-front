import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { MapComponent } from "./map.component";
import { GPXService } from "../services/gpx.service";
import { TracksService } from "../services/tracks.service";
import { Track } from "../models/track";
@Component({
    selector: 'main',
    templateUrl: './app/main/components/main.html',
    styleUrls: ['./app/main/components/main.css'],
    providers: [GPXService]
})
export class MainComponent implements OnInit {


    constructor(private gpxService: GPXService, private tracksService: TracksService) {

    }

    ngOnInit() {
        console.log("Init MainComponent");
    }

    onChange(event) {
        this.gpxService.getTrack(event.target, (t: Track) => {
            this.tracksService.addTrack(t);
            console.log(t.name);
        });
    }






}