import { UserService } from 'src/user/user.service';
import { RegisterDTO } from './dtos/registerDTO.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UserService, jwtService: JwtService, configService: ConfigService);
    register(registrationData: RegisterDTO): Promise<import(".prisma/client").User>;
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").Role;
    }>;
    createSession(user: any): Promise<{
        access_token: string;
    }>;
}
