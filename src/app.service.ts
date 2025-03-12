import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(any): string {
    return 'Hello World!';
  }
}
