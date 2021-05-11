import { Injectable, Body, Logger,  Inject } from '@nestjs/common';

@Injectable()


export class AppService {

  private readonly logger = new Logger(AppService.name);
  
  getHello(): string {
    return 'Hello World!';
  }
}
