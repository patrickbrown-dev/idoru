class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Associations -------------------------------------------------------

  has_many :feeds, through: :subscriptions

  # Instance Methods ---------------------------------------------------

  def create_feed(url)
    Feed.create_and_update(url: url, user: self)
  end
end
