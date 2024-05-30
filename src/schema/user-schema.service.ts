import { HydratedDocument, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './user.schema';

@Injectable()
export class UserSchemaService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  public async create(user: User): Promise<HydratedDocument<User> | null> {
    const model = new this.userModel(user);
    return model.save();
  }

  public async findAll(): Promise<HydratedDocument<User>[]> {
    return this.userModel.find();
  }
}
