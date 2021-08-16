import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TSLab1Service } from './TSlab1/tslab1.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private tsLab1Service: TSLab1Service,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    return this.tsLab1Service.minMaxNorm();
  }
}
