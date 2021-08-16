import { Controller, Get } from '@nestjs/common';
import { TSLab1Service } from './tslab1.service';

@Controller()
export class TSLab1Controller {
  constructor(private readonly labService: TSLab1Service) {}

  @Get()
  async getHello(): Promise<string> {
    return this.labService.getTestString();
  }
}
