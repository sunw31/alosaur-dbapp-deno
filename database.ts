import { createConnection } from "typeorm/mod.ts";
import { User } from "./entities/user.entity.ts";
export function initTypeORM() {
  return createConnection({
    type: "sqlite", // mysql is not currently supported 19/05/2020
    database: "db.sqlite3", // default database
    entities: [
      "entities/user.entity.ts",
    ],
    synchronize: true,
  }).then(async (connection) => {
    const savedUsers = await connection.manager.find(User);
    if (savedUsers.length == 0) {
      const user = new User();
      user.name = "Mike";

      connection.manager.save(user).then((user) => {
        console.log("User has been saved. User id is", user.id);
      });
    } else {
      console.log("We have one user.");
    }
  })
    .catch((error) => console.log(error));
}
