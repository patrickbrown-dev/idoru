class CreateFeeds < ActiveRecord::Migration
  def up 
    Feed.connection.execute(%{
      CREATE TABLE feeds(
        id          serial PRIMARY KEY,
        created_at  timestamp NOT NULL DEFAULT now(),
        updated_at  timestamp NOT NULL DEFAULT now(),
        url         text NOT NULL,
        title       text NOT NULL
      );
    })
  end

  def down
    Feed.connection.execute("DROP TABLE feeds;")
  end
end
