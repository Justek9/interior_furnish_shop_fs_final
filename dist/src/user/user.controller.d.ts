import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAll(): any;
    getById(id: string): Promise<import(".prisma/client").User>;
}
