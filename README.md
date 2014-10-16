cooper-rails[ ![Codeship Status for ptrckbrwn/cooper-rails](https://codeship.io/projects/94437320-e117-0131-eb89-628d6b4144ea/status)](https://codeship.io/projects/25190)
============

*A Damn Fine RSS Reader™*

> Diane, 11:31 pm. Just finished washing up and ready for bed. This
> morning, I showered for nine minutes. Found seventeen hairs; three
> curly, fourteen straight. I used the Basalm shampoo along with the
> conditioner courtesy of the hotel and delivering what it promised. A
> silky manageability. Cotton towel by Field Crest with just the right
> amount of absorbancy. Consumed fifteen doughnuts today, Diane. All
> jelly. I'll be injecting my insulin in four minutes. Diane, slept
> great last night. Got to find out what kind of sheets these are; not
> cotton, not rayon, silky. Damn fine sheets. I'm gonna get naked and
> slide around in them.
> -- Special Agent Dale Cooper

Local Environment Setup
-----------------------

### Postgres

```
brew install postgres
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
createdb cooper_test
createdb cooper_development
```

### Node.js

```
brew install node
```

### RVM

1. Follow setup guide here: [http://rvm.io/rvm/install][1].
2. Install ruby 2.1.2 (`rvm install ruby-2.1.2`).
3. Change to your cooper directory (`cd ~/src/cooper-rails`).
4. Run `bundle install`.

### Run migrations

```
rake db:migrate
```

### Serve application

```
rails server
```

### Create an administrator

1. Navigate to cooper in your browser (`localhost:3000`).
2. Click "Sign Up" and follow instructions.
3. Open up your rails console (`rails console`).
4. Find your user (`user = User.where(email: "chelsea.manning@lavabit.com").first`)
5. Set them as admin (`user.is_admin = true`).
6. Save them. (`user.save!`).

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
