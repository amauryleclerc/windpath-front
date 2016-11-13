import { Component, Input, Output,EventEmitter } from "@angular/core";
import { OnInit } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { Line } from "../models/line";
import { Observable } from "rxjs/Rx";
import { GPXService } from "../services/gpx.service";
import { TracksService } from "../services/tracks.service";
@Component({
    selector: 'tools-bar',
    templateUrl: './app/main/components/tools-bar.html',
    providers: [GPXService]
})
export class ToolsBarComponent implements OnInit {

    @Output() isOpenUpdated = new EventEmitter();
    isOpen: boolean = false;
    constructor(private gpxService: GPXService, private tracksService: TracksService) {
      
    }
    ngOnInit() {
        console.log("Init ToolsBar");
     this.isOpenUpdated.emit(this.isOpen);
    }

    onChange(event) {
        this.gpxService.getTrack(event.target, (t: Track) => {
            this.tracksService.addTrack(t);
        });
    }
    open(){
        this.isOpen = !this.isOpen;
        this.isOpenUpdated.emit(this.isOpen);
    }





}