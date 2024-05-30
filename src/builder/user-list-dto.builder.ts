import { UserDto } from '../dto';
import { HydratedDocument } from 'mongoose';
import { User } from '../schema';
import { CustomSettings } from '../interface';

export class UserListDtoBuilder {
  private readonly data: UserDto[];

  constructor() {
    this.data = new Array<UserDto>();
  }

  public getOutput(): UserDto[] {
    return this.data;
  }

  public setData(models: HydratedDocument<User>[]): this {
    for (const model of models) {
      this.data.push({
        name: model.name,
        email: model.email,
        settings: <CustomSettings>JSON.parse(model.settings),
      });
    }

    return this;
  }
}
