import { EntityRepository } from "typeorm/src/decorator/EntityRepository.ts";
import { Repository } from "typeorm/src/repository/Repository.ts";
import { User } from "../entities/user.entity.ts";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
}
