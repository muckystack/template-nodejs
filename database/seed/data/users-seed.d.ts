export interface UserSeed {
    name: string;
    email: string;
    lastName: string;
    motherLastName: string;
    birthdate: string;
    password: string;
    isActive: boolean;
    roles: number;
    gender: string;
    phone: string;
    image?: string;
}
export declare const userSeed: UserSeed[];
