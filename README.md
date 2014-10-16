cooper-rails[ ![Codeship Status for ptrckbrwn/cooper-rails](https://codeship.io/projects/94437320-e117-0131-eb89-628d6b4144ea/status)](https://codeship.io/projects/25190)
============

*A Damn Fine RSS Reader™*

`ruby-2.1.2`

Local Environment Setup
-----------------------

#. Postgres

    brew install postgres
    pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
    createdb cooper_test
    createdb cooper_development

#. Node.js

    brew install node

#. RVM

  a. Follow setup guide here: [http://rvm.io/rvm/install][1].
  b. Change to your cooper directory: `cd ~/src/cooper-rails`.
  c. Run `bundle install`.

#. Run migrations

    rake db:migrate

#. Create administrator

[TODO]

#. Serve application

    rails server

Contributing
------------

#. Fork this repo.
#. Create a new branch with feature/issue name (`git checkout -b feature-foo-bar`).
#. Hack and commit frequently until done.
#. Open a pull request.

Contributions must:
 - Have full test coverage.
 - Have meaningful commit messages.
 - Adhere to [https://github.com/bbatsov/ruby-style-guide][2].

[1]: http://rvm.io/rvm/install
[2]: https://github.com/bbatsov/ruby-style-guide
