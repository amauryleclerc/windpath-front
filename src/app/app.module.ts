import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ValueProvider } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import {MainComponent} from './components/main/main.component';
import {MapComponent} from './components/map/map.component';
import {TrackListComponent} from './components/track-list/track-list.component';
import {ToolsBarComponent} from './components/tools-bar/tools-bar.component';
import {PlayerComponent} from './components/player/player.component';

import {TracksService} from './services/tracks.service';
import {MapService} from './services/map.service';
import {PlayerService} from './services/player.service';

const WINDOW_PROVIDER: ValueProvider = {
  provide: Window,
  useValue: window
};


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent,
    TrackListComponent,
    ToolsBarComponent,
    PlayerComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    routing,
    AgmCoreModule.forRoot({
         apiKey: 'AIzaSyBfSkyDgkMtKi7tWDvcQ33kwas-lbLAE08'
    })
  ],
  providers: [
    WINDOW_PROVIDER,
    appRoutingProviders,
    TracksService,
    MapService,
    PlayerService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
