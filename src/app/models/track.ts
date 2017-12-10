
import { Pt } from './pt';
import { Line } from './line';
export class Track {
    public lines: Array<Line> = [];
    public center: Pt;
    public maxSpeed: Pt;
    public length: number;
    constructor(public id: string, public name: string, public pts: Array<Pt>) {
        this.lines = this.getLines();
        this.center = this.getCenter();
        this.maxSpeed = this.getMaxSpeed();
        this.length = this.getLength();

    }
    private getLines(): Array<Line> {
        return this.pts.slice(0, this.pts.length - 1).map((pt, index) =>
            new Line(pt, this.pts[index + 1])
        );
    }

    private getLength(): number {
        return Math.round(this.lines.map(l => l.length).reduce(function (a, b) {
            return a + b;
        }, 0) * 100) / 100;
    }

    private getMaxSpeed(): Pt {
        return this.pts.reduce((acc, pt) => {
            if (!acc || pt.speed > acc.speed) {
                return pt;
            } else {
                return acc;
            }
        });
    }
    private getCenter(): Pt {
        const TO_DEG = 180 / Math.PI;
        const TO_RAD = Math.PI / 180;
        const coordsArray = this.pts;

        if (!coordsArray.length) {
            return null;
        }

        let X = 0.0;
        let Y = 0.0;
        let Z = 0.0;
        let lat, lon, hyp;

        coordsArray.forEach(function (coord) {

            lat = coord.lat * TO_RAD;
            lon = coord.lon * TO_RAD;

            X += Math.cos(lat) * Math.cos(lon);
            Y += Math.cos(lat) * Math.sin(lon);
            Z += Math.sin(lat);

        }, this);

        const nb_coords = coordsArray.length;
        X = X / nb_coords;
        Y = Y / nb_coords;
        Z = Z / nb_coords;

        lon = Math.atan2(Y, X);
        hyp = Math.sqrt(X * X + Y * Y);
        lat = Math.atan2(Z, hyp);
        return new Pt((lat * TO_DEG), (lon * TO_DEG), 0, 0);

    }


}
