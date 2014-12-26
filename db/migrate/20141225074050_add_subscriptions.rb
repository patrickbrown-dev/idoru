class AddSubscriptions < ActiveRecord::Migration
  def up
    # Create subscription table
    Subscription.connection.execute(%{
      CREATE TABLE subscriptions(
        id          serial PRIMARY KEY,
        created_at  timestamp NOT NULL DEFAULT now(),
        updated_at  timestamp NOT NULL DEFAULT now(),
        user_id     integer REFERENCES users(id) NOT NULL,
        feed_id     integer REFERENCES feeds(id) NOT NULL
      );
    })

    # Make Urls unique
    Feed.connection.execute(%{
      ALTER TABLE feeds ADD UNIQUE(url);
      ALTER TABLE feeds ALTER COLUMN title DROP NOT NULL;
    })
  end

  def down
    Subscription.connection.
      execute("DROP TABLE subscriptions;")
    Feed.connection.execute(%{
      ALTER TABLE feeds DROP CONSTRAINT feeds_url_key;
      ALTER TABLE feeds ALTER COLUMN title SET NOT NULL;
    })
  end
end
