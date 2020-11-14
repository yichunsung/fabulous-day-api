import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { PlaylistModule } from './playlist/playlist.module';
import { TodoListModule } from './todo-list/todo-list.module';

@Module({
  imports: [TeamModule, PlaylistModule, TodoListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
