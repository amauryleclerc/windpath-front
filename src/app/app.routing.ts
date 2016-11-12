import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from "./main/components/main.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: MainComponent, data: {title: 'WindTrack'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
