# demo for https://github.com/adonisjs/adonis-auth/issues/113

demo for validating non-authenticated request and return token and user


### Installation
install the adonis cli and clone the repo
```
npm i
adonis migration:run
adonis seed
adonis serve --dev
```
visit http://localhost:3333/login

### Result
```
{
  token:{
    ...
  },
  user: {
    ...
  }
}
```