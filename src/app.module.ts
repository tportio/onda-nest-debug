import { MongooseModule } from '@nestjs/mongoose';
import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { MongoMemoryServer } from 'mongodb-memory-server';
import { AppService, DoNothingService, SeedDataService } from './service';
import { AllExceptionsFilter } from './filter';
import { AppController } from './controller';
import { SchemaModule } from './schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: (await MongoMemoryServer.create()).getUri(),
      }),
    }),
    SchemaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    DoNothingService,
    SeedDataService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
  ],
})
export class AppModule {}
