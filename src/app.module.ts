import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlaylistController } from './playlist/playlist.controller';

@Module({
  imports: [],
  controllers: [AppController, PlaylistController],
  providers: [AppService],
})
export class AppModule {}
