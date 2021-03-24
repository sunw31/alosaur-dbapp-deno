# Name

DB implementation of Alosaur web framework using SQLite3.

### TODO

- [ ] Logging
- [ ] OpenAPI documents
- [ ] Unit tests
- [ ] JWT Authentication
- [ ] Using Vue.js as Frontend
- [ ] Using Surveyjs.io to build a survey
- [ ] WeChat HTML5 Authentication
- [ ] WeChat HTMl5 get the mobile number using serial number
- [ ] WeChat HTML5 Pay
- [ ] WeApp Authentication
- [ ] WeApp Pay
- [ ] CI/CD with GitHub Actions
- [ ] Production use with nginx and process monitor.
- [ ] Database schema auto migrations

### Config file

`database.ts`

### Scripts

Run server

```
deno run --allow-net --allow-read --allow-write --importmap=imports.json --config ./tsconfig.json app.ts
```

Then browse [http://localhost:8000/users]()

That's it!
