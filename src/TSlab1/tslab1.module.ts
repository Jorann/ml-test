import { Module } from '@nestjs/common';
import { TSLab1Controller } from './tslab1.controller';
import { TSLab1Service } from './tslab1.service';

@Module({
  imports: [],
  controllers: [TSLab1Controller],
  providers: [TSLab1Service],
  exports: [TSLab1Service],
})
export class TSLab1Module {}
