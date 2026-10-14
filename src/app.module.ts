import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { TasksModule } from './tasks/tasks.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [PlayerModule, TasksModule, ClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
