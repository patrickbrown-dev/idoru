# Idoru [![Circle CI](https://circleci.com/gh/ptrckbrwn/idoru/tree/master.svg?style=svg)](https://circleci.com/gh/ptrckbrwn/idoru/tree/master) [![Code Climate](https://codeclimate.com/github/ptrckbrwn/idoru/badges/gpa.svg)](https://codeclimate.com/github/ptrckbrwn/idoru) [![Test Coverage](https://codeclimate.com/github/ptrckbrwn/idoru/badges/coverage.svg)](https://codeclimate.com/github/ptrckbrwn/idoru)

> Someone seated opposite the camera, beyond a phalanx of green bottles. The
> darkness and the bandwidth of the tiny camera making the features impossible
> to read. Then Rez leaned forward, recognizable in the new depth of focus. He
> gestured toward the camera with a glass of red wine.<br /><br />
> "If we could ever once stop talking about the music, and the industry, and
> all the politics of that, I think I'd probably tell you that it's easier to
> desire and pursue the attention of tens of millions of total strangers than
> it is to accept the love and loyalty of the people closest to us."<br /><br />
> &mdash; William Gibson, <em>Idoru</em>

## Local Environment Setup

### Postgres

```
brew install postgres
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
createdb idoru_test
createdb idoru_development
```

### Node.js

```
brew install node
```

### RVM

1. Follow setup guide here: [http://rvm.io/rvm/install][1].
2. Install ruby 2.1.2 (`rvm install ruby-2.1.2`).
3. Change to your idoru directory (`cd ~/src/idoru`).
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

1. Navigate to idoru in your browser (`localhost:3000`).
2. Click "Sign Up" and follow instructions.
3. Open up your rails console (`rails console`).
4. Find your user (`user = User.where(email: "chelsea.manning@lavabit.com").first`)
5. Set them as admin (`user.is_admin = true`).
6. Save them. (`user.save!`).

## Contributing

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
