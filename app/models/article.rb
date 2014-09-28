class Article < ActiveRecord::Base

  # Validations
  validates_presence_of :title
  validates_presence_of :url
  validates_presence_of :full_story

end
