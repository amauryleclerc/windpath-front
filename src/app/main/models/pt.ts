export class Pt {

    constructor(public lat: number, public lon: number, public speed: number, public elevation: number) {
    }
    getSpeedLabel(): String {
        return  new String(this.getKnotsSpeed())+" Noeuds - "+new String(this.getKmSpeed())+" Km/h";
    }
    getKmSpeed():number{
        return Math.round(this.speed*3.6*100)/100;
    }
    getKnotsSpeed():number{
        return Math.round(this.speed*1.943844492*100)/100;
    }
}