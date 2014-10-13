namespace :batch_purge_feeds do
  task :run, [:batch_size] => :environment do |t, args|

    batch_size = args[:batch_size].blank? ? 10 : args[:batch_size]

    feeds_to_purge = Feed.order(purged_at: :asc).first(batch_size)
    feeds_to_purge.each do |feed|
      puts "Purging #{feed.title}..."
      feed.purge
      puts "Done."
    end
  end
end
