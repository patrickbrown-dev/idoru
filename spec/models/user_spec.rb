require 'rails_helper'

RSpec.describe User, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"

  # Associations -------------------------------------------------------

  it { should have_many(:feeds) }

  describe "#is_admin" do
    it "should default to false" do
      expect(User.new.is_admin).to eq(false)
    end
  end
end
