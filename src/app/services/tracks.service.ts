import { Injectable } from '@angular/core';
import { Track } from '../models/track';
import { Pt } from '../models/pt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class TracksService {

    private tracks: Array<Track> = [];
    private _selectTrack: Track = null;
    private tracksSubject = new BehaviorSubject<Array<Track>>(this.tracks);
    private selectTrackSubject = new BehaviorSubject<Track>(this._selectTrack);
    constructor() {

    }

    getTracks(): Observable<Array<Track>> {
        return this.tracksSubject.asObservable();
    }
    getSelectTrack(): Observable<Track> {
        return this.selectTrackSubject
            .asObservable()
            .filter(t => t != null);
    }
    addTrack(track: Track) {
        this.tracks.push(track);
        this._selectTrack = track;
        this.selectTrackSubject.next(this._selectTrack);
        this.tracksSubject.next(this.tracks);
    }
    selectTrack(track: Track) {
        this._selectTrack = track;
        this.selectTrackSubject.next(this._selectTrack);
    }


}
