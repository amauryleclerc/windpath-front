import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Track } from '../../models/track';
import { Pt } from '../../models/pt';
import { Line } from '../../models/line';
import { Observable } from 'rxjs/Observable';
import { GPXService } from '../../services/gpx.service';
import { TracksService } from '../../services/tracks.service';
import { MapService } from '../../services/map.service';
@Component({
    selector: 'app-tools-bar',
    templateUrl: './tools-bar.component.html',
    styleUrls: ['./tools-bar.component.css'],
    providers: [GPXService]
})
export class ToolsBarComponent implements OnInit {

    @Output() isOpenUpdated = new EventEmitter();
    isOpen: Boolean = false;
    selectTrack: Track;
    constructor(private gpxService: GPXService, private tracksService: TracksService, private mapService: MapService) {

    }
    ngOnInit() {
        console.log('Init ToolsBar');
        this.isOpenUpdated.emit(this.isOpen);
        this.tracksService.getSelectTrack().subscribe(track => {
            this.selectTrack = track;
        });


    }

    onChange(event) {
        this.gpxService.getTrack(event.target, (t: Track) => {
            this.tracksService.addTrack(t);
        });
    }
    open() {
        this.isOpen = !this.isOpen;
        this.isOpenUpdated.emit(this.isOpen);
    }
    showMaxSpeed() {
        this.mapService.toggleMaxSpeed(this.selectTrack.maxSpeed);
    }

}
