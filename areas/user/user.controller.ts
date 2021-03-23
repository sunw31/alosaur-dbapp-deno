import { Controller, Get, Post, Put, Delete, Param, Body } from "alosaur/mod.ts";
import { UserService } from "../../services/user.service.ts";

@Controller("/users")
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  getAll() {
    console.log("Get all users.")
    return this.service.findAll();
  }

  @Get("/:id")
  getById(@Param("id") id: number) {
    console.log(`Get user with id: ${id}`);
    return this.service.findById(id);
  }

  @Post()
  create(@Body() body: any) {
    console.log(`Create a user with name: ${body.name}`);
    return this.service.save(body.name);
  }

  @Put("/:id")
  update(@Body() body: any, @Param("id") id: number) {
    console.log(`Change user with id ${id} 's name to: ${body.name}`);
    return this.service.update(id, body.name);
  }

  @Delete("/:id")
  delete(@Param("id") id: number) {
    console.log(`Delete user with id ${id}`);
    this.service.delete(id);
    return "";
  }
}
