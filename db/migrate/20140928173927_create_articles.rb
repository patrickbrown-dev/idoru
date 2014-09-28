class CreateArticles < ActiveRecord::Migration
  def up
    Article.connection.execute(%{
      CREATE TABLE articles(
        id           serial PRIMARY KEY,
        created_at   timestamp NOT NULL DEFAULT now(),
        updated_at   timestamp NOT NULL DEFAULT now(),
        published_at timestamp,
        url          text NOT NULL,
        title        text NOT NULL,
        author       text,
        summary      text,
        body         text,
        full_story   boolean NOT NULL DEFAULT true
      );
    })
  end

  def down
    Article.connection.execute("DROP TABLE articles;")
  end
end
