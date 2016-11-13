import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {MainComponent} from "./main/components/main.component";
import {MapComponent} from "./main/components/map.component";
import {TrackListComponent} from "./main/components/track-list.component";
import {ToolsBarComponent} from "./main/components/tools-bar.component";
import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ValueProvider } from '@angular/core';
import {TracksService} from "./main/services/tracks.service";

const WINDOW_PROVIDER: ValueProvider = {
    provide: Window,
    useValue: window
};

@NgModule({
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        routing,
        AgmCoreModule.forRoot({
             apiKey: 'AIzaSyBfSkyDgkMtKi7tWDvcQ33kwas-lbLAE08'
        })
    ],
    declarations: [
        AppComponent,
        MainComponent,
        MapComponent,
        TrackListComponent,
        ToolsBarComponent
    ],
    providers: [
        WINDOW_PROVIDER,
        appRoutingProviders,
        TracksService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

