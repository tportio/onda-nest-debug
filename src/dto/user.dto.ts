import { CustomSettings } from '../interface';

export class UserDto {
  /**
   * 본명
   */
  public name!: string;

  /**
   * 연락 이메일
   */
  public email!: string;

  /**
   * 커스텀 설정
   */
  public settings!: CustomSettings;
}
