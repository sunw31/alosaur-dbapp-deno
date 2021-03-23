import { getCustomRepository } from "typeorm/src/index.ts";
import { UserRepository } from "../repositories/user.repository.ts";

export class UserService {
  private userRepository: UserRepository;
  constructor() {
      this.userRepository = getCustomRepository(UserRepository);
  }
  getAll() {
      return this.userRepository.find();
  }
}
