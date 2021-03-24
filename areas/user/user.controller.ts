import {
  Body,
  Content,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "alosaur/mod.ts";
import { UserService } from "../../services/user.service.ts";
import { UserDto } from "../../dtos/user.dto.ts";

@Controller("/users")
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  getAll() {
    console.log("Get all users.");
    return this.service.findAll().then((users) => {
      console.log("Success to get all users");
      return users;
    }).catch((err) => {
      console.error("Failed to get all users");
      console.error(err);
      return Content({}, 400);
    });
  }

  @Get("/:id")
  getById(@Param("id") id: number) {
    console.log(`Get user with id: ${id}`);
    return this.service.findById(id).then((user) => {
      console.log(`Success to get user with id: ${id}`);
      return user;
    }).catch((err) => {
      console.error(`Failed to get user with id: ${id}`);
      console.error(err);
      return Content({
        "id": id,
      }, 400);
    });
  }

  @Post()
  create(@Body() body: UserDto) {
    console.log(`Create a user with name: ${body.name}`);
    return this.service.save(body.name).then((user) => {
      console.log(`Success to create user with name: ${body.name}`);
      return Content({
        "name": body.name,
      }, 201);
    }).catch((err) => {
      console.error("Failed to create user with body:");
      console.error(body);
      console.error(err);
      return Content({
        "body": body,
      }, 400);
    });
  }

  @Put("/:id")
  update(@Body() body: UserDto, @Param("id") id: number) {
    console.log(`Change the name of user with id ${id} to: ${body.name}`);
    return this.service.update(id, body.name).then((user) => {
      console.log(
        `Success to change the name of user with id ${id} to: ${body.name}`,
      );
      return user;
    }).catch((err) => {
      console.error(`Failed to update user with id ${id} and body`);
      console.error(body);
      console.error(err);
      return Content({
        "id": id,
        "body": body,
      }, 400);
    });
  }

  @Delete("/:id")
  delete(@Param("id") id: number) {
    console.log(`Delete user with id ${id}`);
    return this.service.delete(id).then(() => {
      console.log(`Success to delete user with id ${id}`);
      return Content({
        "id": id,
      }, 204);
    }).catch((err) => {
      console.error(`Failed to delete user with id ${id}`);
      console.error(err);
      return Content({
        "id": id,
      }, 400);
    });
  }
}
