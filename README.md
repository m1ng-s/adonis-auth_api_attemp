# demo for https://github.com/adonisjs/adonis-auth/issues/113

install the adonis cli and clone the repo
```
npm i
adonis migration:run
adonis seed
adonis serve --dev
```

visit http://localhost:3333/user

example expected result for the enhancement
```
{
  "id": 4,
  "username": "sapdo",
  "email": "hello@world.com",
  "password": "$2a$10$BTTTRb.oegjVbVzYv.oku.cK3VXQQBu74eqyYJNp5K5ux2wlly9p.",
  "created_at": "2018-06-09 22:23:24",
  "updated_at": "2018-06-09 22:23:24"
}
```