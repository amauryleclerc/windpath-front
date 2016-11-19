import { Injectable } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { TracksService } from "./tracks.service";
import { BehaviorSubject, Observable } from "rxjs/Rx";
@Injectable()
export class MapService {

     private _maxSpeed: Pt = null;
    private maxSpeedSubject = new BehaviorSubject<Pt>(this._maxSpeed);
    constructor(private tracksService:TracksService) {
        this.tracksService.getSelectTrack().subscribe(t =>{
            this.hideMaxSpeed();
        });
    }
    showMaxSpeed(pt:Pt){
        this._maxSpeed = pt;
        this.maxSpeedSubject.next(pt);
    }
    hideMaxSpeed(){
        this._maxSpeed = null;
        this.maxSpeedSubject.next(null);
    }
    toggleMaxSpeed(pt:Pt){
        if( this._maxSpeed == null){
            this.showMaxSpeed(pt);
        }else{
            this.hideMaxSpeed();
        }
    }
    getMaxSpeed():Observable<Pt>{
        return this.maxSpeedSubject.asObservable();
    }

}