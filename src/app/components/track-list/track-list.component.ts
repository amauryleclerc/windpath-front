import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Track } from '../../models/track';
import { Pt } from '../../models/pt';
import { Line } from '../../models/line';
import { TracksService } from '../../services/tracks.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-track-list',
    templateUrl: './track-list.component.html',
    providers: []
})
export class TrackListComponent implements OnInit {

    tracks: Array<Track> = [];
    selectTrack: Track;
    constructor(private tracksService: TracksService) {

    }
    ngOnInit() {
        console.log('Init Track List');
        this.tracksService.getTracks().subscribe( tracks => {
            this.tracks = tracks;
            if (!this.selectTrack && tracks.length > 0) {
                this.selectTrack = tracks[0];
            }
        });
        this.tracksService.getSelectTrack().subscribe( track => {
            this.selectTrack = track;
        });
    }

    onSelectTrack(track: Track) {
        this.tracksService.selectTrack(track);
    }
}
