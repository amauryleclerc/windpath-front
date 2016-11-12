import { Injectable } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
@Injectable()
export class TracksService {
    private pts: Array<Pt> = [
        new Pt(47.191260, -1.609325),
        new Pt(47.193126, -1.640224),
        new Pt(47.197559, -1.669750),
        new Pt(47.205023, -1.705456)
    ];


    private tracks: Array<Track> = [
        new Track("00", "track1", this.pts)
    ];

    getTracks(): Array<Track> {
        return this.tracks;
    }

}