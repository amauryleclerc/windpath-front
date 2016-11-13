import { Injectable } from "@angular/core";
import { Track } from "../models/track";
import { Pt } from "../models/pt";
import { BehaviorSubject, Observable } from "rxjs/Rx";
@Injectable()
export class MapService {

     private _maxSpeed: Pt = null;
    private maxSpeedSubject = new BehaviorSubject<Pt>(this._maxSpeed);
    constructor() {

    }
    showMaxSpeed(pt:Pt){
        this.maxSpeedSubject.next(pt);
    }
    getMaxSpeed():Observable<Pt>{
        return this.maxSpeedSubject.asObservable();
    }

}