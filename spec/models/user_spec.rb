require 'rails_helper'

RSpec.describe User, :type => :model do
  it { should have_many(:feeds).through(:subscriptions) }

  describe "#is_admin" do
    it "should default to false" do
      expect(User.new.is_admin).to eq(false)
    end
  end
end
