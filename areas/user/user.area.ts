import { Area } from "alosaur/mod.ts";
import { UserController } from "./user.controller.ts";

@Area({
  controllers: [UserController],
})
export class UserArea {
}
