import { Injectable } from '@angular/core';
import { Track } from '../models/track';
import { TracksService } from './tracks.service';
import { Pt } from '../models/pt';
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
export class PlayerService {

    private position: Observable<Pt>;
    private pauseSubject = new BehaviorSubject<boolean>(true);
    private speedSubject = new BehaviorSubject<number>(1000);
    constructor(private tracksService: TracksService) {
        const interval: Observable<Number> = this.pauseSubject.combineLatest(this.speedSubject, (a, b) => [a, b])//
            .share()//
            .switchMap(tuple => tuple[0] ? Observable.never() : Observable.interval(Number(tuple[1])));

        this.position = this.tracksService.getSelectTrack()//
            .do(() => this.pause())//
            .switchMap(track => Observable.zip(Observable.from(track.pts), interval, (a, b) => a).finally(() => this.pause()).repeat());
    }
    play() {
        this.pauseSubject.next(false);
    }
    pause() {
        this.pauseSubject.next(true);
    }
    setSpeed(speed: number) {
        this.speedSubject.next(speed);
    }
    faster() {
        this.speedSubject.take(1).filter(s => s >= 0.1).subscribe(s => this.speedSubject.next(s / 10));
    }
    slower() {
        this.speedSubject.take(1).filter(s => s <= 10000).subscribe(s => this.speedSubject.next(s * 10));
    }
    getPosition(): Observable<Pt> {
        return this.position;
    }
    getSpeed(): Observable<number> {
        return this.speedSubject.asObservable();
    }
    isPlaying(): Observable<boolean> {
        return this.pauseSubject.asObservable().map(v => !v);
    }
    getDirection(): Observable<String> {
        return this.position.bufferCount(2, 1)//
            .map(l => this.getDirectionFromPts(l[0], l[1]))//
            .startWith('right')//
            .distinctUntilChanged();
    }

    private getDirectionFromPts(ptA: Pt, ptB: Pt): String {
        if (ptA.lon < ptB.lon) {
            return 'right';
        } else {
            return 'left';
        }
    }
}