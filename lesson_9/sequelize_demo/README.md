# Sequelize demo and boilerplate

# Resources

- https://sequelize.org/v5/

# Requirements

To boot we need a running instance of a database. It's always a good idea to use
a docker container for these things:

```bash
$ docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d -t postgres
```

We then install the dependencies, create the database with sequelize-cli and
start our dev server:

```bash
$ yarn
$ yarn sequelize-cli db:create
$ yarn dev
```
