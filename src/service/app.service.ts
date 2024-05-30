import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';

import { User } from '../schema';

@Injectable()
export class AppService {
  public getStatus(): string {
    return 'OK';
  }

  public getUserSeedData(): User[] {
    const users = new Array<User>();
    const faultyIndex = Math.floor(Math.random() * 10);
    for (let i = 0; i < 10; i++) {
      users.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        settings: i !== faultyIndex ? '{"lang": "ko"}' : '{"lang":}',
      });
    }

    return users;
  }
}
