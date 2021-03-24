import { DeleteResult, getCustomRepository, UpdateResult } from "typeorm/src/index.ts";
import { UserRepository } from "../repositories/user.repository.ts";
import { User } from "../entities/user.entity.ts";

export class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne(id);
  }

  save(name: string): Promise<User> {
    const user = new User();
    user.name = name;
    return this.userRepository.save(user);
  }

  update(id: number, name: string): Promise<UpdateResult> {
    return this.userRepository.update({id: id},{name: name});
  }

  delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
