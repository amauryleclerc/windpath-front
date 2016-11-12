import { Pt } from "./pt";
export class Line {


    public color:String;
    constructor(public ptA: Pt,public ptB: Pt) {
        this.color=this.getColor();
    }
    private getColor() {
        let value = (this.ptA.speed+this.ptB.speed)/25;
        var hue = ((1 - value) * 120).toString(10);
        return ["hsl(", hue, ",100%,50%)"].join("");
    }

}