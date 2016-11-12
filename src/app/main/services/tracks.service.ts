import { Injectable } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { BehaviorSubject, Observable } from "rxjs/Rx";
@Injectable()
export class TracksService {

    private tracks: Array<Track> = [];
    private subject = new BehaviorSubject<Array<Track>>(this.tracks);

    constructor() {
        let pts: Array<Pt> = [
            new Pt(47.191260, -1.609325),
            new Pt(47.193126, -1.640224),
            new Pt(47.197559, -1.669750),
            new Pt(47.205023, -1.705456)
        ];
        this.subject.asObservable().subscribe(t => {
            console.log("new");
        });
        this.addTrack(new Track("00", "track1", pts));
    }

    getTracks(): Observable<Array<Track>> {
        return this.subject.asObservable();
    }
    addTrack(track: Track) {
        this.tracks.push(track);
        this.subject.next(this.tracks);
    }

}