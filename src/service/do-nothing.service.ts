import { Injectable } from '@nestjs/common';

@Injectable()
export class DoNothingService {
  public doThatThing(): void {
    // Long process function...
    const data = new Array<number>();
    data.push(1);
    data.push(2);
    data.push(3);
    data.push(4);
    data.push(5);
    data.push(6);
  }
}
