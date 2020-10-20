import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamModule } from './team/team.module';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [TeamModule, PlaylistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
