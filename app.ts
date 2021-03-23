import { App } from "alosaur/mod.ts";
import { UserArea } from "./areas/user/user.area.ts";
import { initTypeORM } from "./database.ts";

await initTypeORM(); // Init before creating the app
const app = new App({
  areas: [UserArea],
});

app.listen();
