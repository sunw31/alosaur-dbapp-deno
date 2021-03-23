import { getCustomRepository } from "typeorm/src/index.ts";
import { UserRepository } from "../repositories/user.repository.ts";
import { User } from '../entities/user.entity.ts';

export class UserService {
  private userRepository: UserRepository;
  constructor() {
      this.userRepository = getCustomRepository(UserRepository);
  }

  getAll() {
      return this.userRepository.find();
  }

  getById(id: number) {
    return this.userRepository.findOne(id);
  }

  save(name: string) {
    const user = new User();
    user.name = name;
    return this.userRepository.save(user);
  }

  async update(id: number, name: string) {
    const user = await this.userRepository.findOne(id);
    if (user) {
      user.name = name;
      return this.userRepository.save(user);
    }
  }
}
