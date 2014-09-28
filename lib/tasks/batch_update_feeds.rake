namespace :batch_update_feeds do
  task :run, [:batch_size] => :environment do |t, args|

    batch_size = args[:batch_size].blank? ? 10 : args[:batch_size]

    feeds_to_update = Feed.order(updated_at: :asc).first(batch_size)
    feeds_to_update.each do |feed|
      print "Updating #{feed.title}..."
      feed.update_articles
      puts "Done."
    end
  end
end
