import { Injectable } from '@angular/core';
import { Track } from '../models/track';
import { Pt } from '../models/pt';
import { TracksService } from './tracks.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/repeat';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/observable/never';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MapService {

     private _maxSpeed: Pt = null;
    private maxSpeedSubject = new BehaviorSubject<Pt>(this._maxSpeed);
    constructor(private tracksService: TracksService) {
        this.tracksService.getSelectTrack().subscribe(t => {
            this.hideMaxSpeed();
        });
    }
    showMaxSpeed(pt: Pt) {
        this._maxSpeed = pt;
        this.maxSpeedSubject.next(pt);
    }
    hideMaxSpeed() {
        this._maxSpeed = null;
        this.maxSpeedSubject.next(null);
    }
    toggleMaxSpeed(pt: Pt) {
        if (this._maxSpeed == null) {
            this.showMaxSpeed(pt);
        }else {
            this.hideMaxSpeed();
        }
    }
    getMaxSpeed(): Observable<Pt> {
        return this.maxSpeedSubject.asObservable();
    }

}
