import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/registerDTO.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    create(registerData: RegisterDTO): Promise<import(".prisma/client").User>;
    login(req: any, res: any): Promise<void>;
    logout(res: any): Promise<void>;
}
