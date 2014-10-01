class AssociateUserWithFeeds < ActiveRecord::Migration
  def up
    Feed.connection.execute(%{
      ALTER TABLE feeds ADD COLUMN user_id integer references users(id);
    })
  end

  def down
    Feed.connection.execute(%{
      ALTER TABLE feeds DROP COLUMN user_id;
    })
  end
end
