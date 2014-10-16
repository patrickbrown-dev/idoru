cooper-rails[ ![Codeship Status for ptrckbrwn/cooper-rails](https://codeship.io/projects/94437320-e117-0131-eb89-628d6b4144ea/status)](https://codeship.io/projects/25190)
============

*A Damn Fine RSS Reader™*

`ruby-2.1.2`

Local Environment Setup
-----------------------

1. Postgres

```
brew install postgres
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
reatedb cooper_test
createdb cooper_development
```

2. Node.js

```
brew install node
```

3. RVM

  1. Follow setup guide here: [http://rvm.io/rvm/install][1].
  2. Change to your cooper directory: `cd ~/src/cooper-rails`.
  3. Run `bundle install`.

4. Run migrations

```
rake db:migrate
```

5. Create administrator

```
[TODO]
```

6. Serve application

```
rails server
```

Contributing
------------

1. Fork this repo.
2. Create a new branch with feature/issue name (`git checkout -b feature-foo-bar`).
3. Hack and commit frequently until done.
4. Open a pull request.

Contributions must:
 - Have full test coverage.
 - Have meaningful commit messages.
 - Adhere to [https://github.com/bbatsov/ruby-style-guide][2].

[1]: http://rvm.io/rvm/install
[2]: https://github.com/bbatsov/ruby-style-guide
