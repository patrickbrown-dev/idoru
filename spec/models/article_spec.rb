require 'rails_helper'

RSpec.describe Article, :type => :model do

  # Associations -------------------------------------------------------

  it { should belong_to(:feed) }

  # Validations --------------------------------------------------------

  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:url) }
  it { should validate_presence_of(:full_story) }

end
