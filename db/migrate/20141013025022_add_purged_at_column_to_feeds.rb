class AddPurgedAtColumnToFeeds < ActiveRecord::Migration
  def up
    Feed.connection.execute(%{
      ALTER TABLE feeds ADD COLUMN purged_at timestamp;
    })
  end

  def down
    Feed.connection.execute(%{
      ALTER TABLE feeds DROP COLUMN purged_at;
    })
  end
end
