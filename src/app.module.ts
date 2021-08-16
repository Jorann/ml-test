import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TSLab1Module } from './TSlab1/tslab1.module';

// import { TSLab1Service } from './TSlab1/tslab1.service';

@Module({
  imports: [TSLab1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
