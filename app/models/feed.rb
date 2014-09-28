class Feed < ActiveRecord::Base

  # Validations
  validates_presence_of(:title)
  validates_presence_of(:url)

end
