import { Injectable, OnModuleInit } from '@nestjs/common';

import { UserSchemaService } from '../schema';
import { AppService } from './app.service';

@Injectable()
export class SeedDataService implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    private readonly userSchemaService: UserSchemaService,
  ) {}

  public async onModuleInit(): Promise<void> {
    const seedData = this.appService.getUserSeedData();
    await Promise.all(
      seedData.map(async (user) => this.userSchemaService.create(user)),
    );
  }
}
