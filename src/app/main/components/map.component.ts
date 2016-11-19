import { Component, Input } from "@angular/core";
import { OnInit } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { Line } from "../models/line";
import { TracksService } from "../services/tracks.service";
import { PlayerService } from "../services/player.service";
import { MapService } from "../services/map.service";
import { Observable } from "rxjs/Rx";
import { GoogleMapsAPIWrapper } from "angular2-google-maps/core";

@Component({
    selector: 'map',
    templateUrl: './app/main/components/map.html',
    styleUrls: ['./app/main/components/map.css'],
    providers: [GoogleMapsAPIWrapper]
})
export class MapComponent implements OnInit {

    tracks: Array<Track> = [];
    lines: Array<Line> = [];
    center: Pt;
    self: MapComponent = this;
    zoom: Number = 15;
    maxSpeed: Pt;
    windsurfer : Pt;
    icon:String;
    constructor(private tracksService: TracksService, private googleMapsAPIWrapper: GoogleMapsAPIWrapper, private mapService: MapService, private playerService:PlayerService) {
        this.center = new Pt(0, 0, 0, 0);
  

    }
    ngOnInit() {
        console.log("Init Map");
        this.tracksService.getSelectTrack().subscribe(track => {
            this.tracks.splice(0, this.tracks.length);
            this.lines.splice(0, this.lines.length);
            this.center = track.center;
            this.tracks.push(track);
            track.lines.forEach(line => {
                this.lines.push(line);
            });
        });
        this.mapService.getMaxSpeed().subscribe(pt => {
            this.maxSpeed = pt;
        });
        this.playerService.getPosition().subscribe(pt =>{
            this.windsurfer = pt;
        });
        this.playerService.getDirection().subscribe(d =>{
            this.icon = "img/"+d+".gif";
        });
    }
    @Input() set isPanelOpen(isOpen: boolean) {
    }



}