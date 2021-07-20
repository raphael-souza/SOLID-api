import { User } from "../entities/User";

export interface IUserRepository {
  // dois users não podem ter o mesmo email
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}