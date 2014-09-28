class AssociateArticlesWithFeeds < ActiveRecord::Migration
  def up
    Article.connection.execute(%{
      ALTER TABLE articles ADD COLUMN feed_id integer references feeds(id);
    })
  end

  def down
    Article.connection.execute(%{
      ALTER TABLE articles DROP COLUMN feed_id;
    })
  end
end
