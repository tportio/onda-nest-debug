import { Controller, Get } from '@nestjs/common';

import { UserListDtoBuilder } from '../builder';
import { UserSchemaService } from '../schema';
import { AppService } from '../service';
import { UserDto } from '../dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userSchemaService: UserSchemaService,
  ) {}

  @Get()
  public async sanityCheck(): Promise<string> {
    return this.appService.getStatus();
  }

  @Get('user')
  public async getUsers(): Promise<UserDto[]> {
    const models = await this.userSchemaService.findAll();
    const builder = new UserListDtoBuilder().setData(models);
    return builder.getOutput();
  }
}
