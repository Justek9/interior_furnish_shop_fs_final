import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { RegisterDTO } from './dtos/registerDTO.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  public async register(registrationData: RegisterDTO) {
    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    const userData = {
      email: registrationData.email,
    };
    return this.usersService.create(userData, hashedPassword);
  }
}
