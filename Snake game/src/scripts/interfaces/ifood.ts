import {IPosition} from './iposition';
import { ISnake } from './isnake';

export interface IFood{
    position: IPosition,
    createFood():void
}

