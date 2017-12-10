import { Pt } from './pt';
export class Line {


    public color: String;
    public length: number;
    constructor(public ptA: Pt, public ptB: Pt) {
        this.color = this.getColor();
        this.length = this.getDistanceFromLatLonInKm();
    }
    private getColor() {
        const moy = (this.ptA.speed + this.ptB.speed) * 1.943844492 / 2;
        const value = moy / 30;
        const hue = ((1 - value) * 120).toString(10);
        return ['hsl(', hue, ',100%,50%)'].join('');
    }

    private getDistanceFromLatLonInKm(): number {
        const lat1 = this.ptA.lat;
        const lat2 = this.ptB.lat;
        const lon1 = this.ptA.lon;
        const lon2 = this.ptB.lon;
        const R = 6371; // Radius of the earth in km
        const dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
        const dLon = this.deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const d = R * c; // Distance in km
        return d;
    }
    private deg2rad(deg: number) {
        return deg * (Math.PI / 180);
    }

}
