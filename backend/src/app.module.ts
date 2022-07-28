import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Song, SongSchema } from './schema/Music.shema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Learning'),
    MongooseModule.forFeature([{ name: Song.name, schema: SongSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
