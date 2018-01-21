import {IPainter} from '../interfaces/ipainter';

export class Painter implements IPainter{
    canvas:any;
    context: any;
    constructor(_canvas:any){
        this.canvas = _canvas;
        this.context = _canvas.getContext('2d');
    }
    fillArea(x1:number, y1:number,x2:number, y2:number, color:string):void{
        this.context.fillStyle = color;
        this.context.fillRect(x1, y1,x2, y2);

    }
    strokeArea(x1:number, y1:number,x2:number, y2:number, color:string):void{
        this.context.strokeStyle = color;
        this.context.strokeRect(x1, y1,x2, y2);
    }
    drawMessage(message:string): void {
        this.context.font = "20px Arial";
        this.context.strokeText(message, 20, 20);
    }
}
