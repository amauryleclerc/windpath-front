import { Pt } from "./pt";
export class Line {


    public color: String;
    public length: number;
    constructor(public ptA: Pt, public ptB: Pt) {
        this.color = this.getColor();
        this.length = this.getDistanceFromLatLonInKm();
    }
    private getColor() {
        let moy = (this.ptA.speed + this.ptB.speed)*1.943844492 / 2;
        let value = moy / 30;
        var hue = ((1 - value) * 120).toString(10);
        return ["hsl(", hue, ",100%,50%)"].join("");
    }

    private getDistanceFromLatLonInKm(): number {
        var lat1 = this.ptA.lat;
        var lat2 = this.ptB.lat;
        var lon1 = this.ptA.lon;
        var lon2 = this.ptB.lon;
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }
    private deg2rad(deg: number) {
        return deg * (Math.PI / 180)
    }

}