import { Injectable } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { BehaviorSubject, Observable } from "rxjs/Rx";
@Injectable()
export class TracksService {

    private tracks: Array<Track> = [];
    private _selectTrack: Track = null;
    private tracksSubject = new BehaviorSubject<Array<Track>>(this.tracks);
    private selectTrackSubject = new BehaviorSubject<Track>(this._selectTrack);
    constructor() {
        let pts: Array<Pt> = [
            new Pt(47.191260, -1.609325, 0, 0),
            new Pt(47.193126, -1.640224, 0, 0),
            new Pt(47.197559, -1.669750, 0, 0),
            new Pt(47.205023, -1.705456, 0, 0)
        ];
        this.addTrack(new Track("00", "track1", pts));
    }

    getTracks(): Observable<Array<Track>> {
        return this.tracksSubject.asObservable();
    }
    getSelectTrack(): Observable<Track> {
        return this.selectTrackSubject
            .asObservable()
            .filter(t => t !=null);
    }
    addTrack(track: Track) {
        this.tracks.push(track);
        this._selectTrack = track;
        this.selectTrackSubject.next(this._selectTrack);
        this.tracksSubject.next(this.tracks);
    }
    selectTrack(track:Track){
        this._selectTrack = track;
        this.selectTrackSubject.next(this._selectTrack);
    }


}