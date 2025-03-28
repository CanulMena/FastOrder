import { UserDatasource } from "../../domain/datasource";
import { LoginUserDto } from "../../domain/dtos/auth";
import { User } from "../../domain/entities";
import { UserRepository } from "../../domain/repositories";

export class UserRepositoryImpl implements UserRepository {

  constructor(
    private readonly userDatasource: UserDatasource
  ) {}

  updateEmailValidation(email: string, isValidated: boolean): Promise<User> {
    return this.userDatasource.updateEmailValidation(email, isValidated);
  }

  getUserByEmail(email: string): Promise<User> {
    return this.userDatasource.getUserByEmail(email);
  }

  createUser(user: any): Promise<User> {
    return this.userDatasource.createUser(user);
  }
  getUsers(): Promise<User[]> {
    return this.userDatasource.getUsers();
  }
  getUserById(userId: number): Promise<User> {
    return this.userDatasource.getUserById(userId);
  }
  deleteUser(userId: number): Promise<User> {
    return this.userDatasource.deletUser(userId);
  }
  updateUser(user: any): Promise<User> {
    return this.userDatasource.updateUser(user);
  }
  
}