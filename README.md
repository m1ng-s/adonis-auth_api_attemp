# demo for https://github.com/adonisjs/adonis-auth/issues/113

install the adonis cli
clone the repo
```
npm i
adonis seed
adonis serve --dev
```

visit localhost:3333/user

example expected result
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