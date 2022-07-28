import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song, SongDocument } from './schema/Music.shema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Song.name) private musicModel: Model<SongDocument>,
  ) {}

  async getSong() {
    const songs = await this.musicModel.find();
    return {
      success: true,
      message: 'save music successfully',
      songs,
    };
  }

  async postSong(data) {
    const newMusic = new this.musicModel(data);
    await newMusic.save();
    return {
      success: true,
      message: 'save music successfully',
    };
  }
  async deleteSong(id) {
    await this.musicModel.findByIdAndDelete(id);
    return {
      success: true,
      message: 'delete music successfully',
    };
  }

  async updateSong(id, data) {
    await this.musicModel.updateOne({ _id: id }, { $set: data });
    return {
      success: true,
      message: 'update music successfully',
    };
  }
}
