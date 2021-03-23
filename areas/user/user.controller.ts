import { Controller, Get, Param, Req } from "alosaur/mod.ts";
import { UserService } from "../../services/user.service.ts";

@Controller("/users")
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  list() {
    console.log("Get all users.")
    return this.service.getAll();
  }
}
