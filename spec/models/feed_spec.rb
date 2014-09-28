require 'rails_helper'

RSpec.describe Feed, :type => :model do

  # Validations
  it { should validate_presence_of :title }
  it { should validate_presence_of :url }

end
