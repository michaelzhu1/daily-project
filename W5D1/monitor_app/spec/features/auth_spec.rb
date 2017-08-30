require 'spec_helper'
require 'rails_helper'


feature 'the signup process' do


  it 'has a new user page' do
    visit new_user_url
    expect(page).to have_content "Sign Up!"
  end

  it 'signing up a user' do
    sign_up_as("Michael")
    scenario 'shows username on the homepage after signup' do
      expect(page).to have_content "Welcome Michael"
    end

  end
end

feature 'the logging in process' do
  it 'signing in a user' do
    login_as("Bob")
    scenario 'shows username on the homepage after login' do
      expect(page).to have_content "Bob"
    end
  end
end

feature 'logging out' do

  it 'begins with a logged out state' do
    visit new_user_url
    expect(page).to have_content "Sign In"
  end

  it 'doesn\'t show username on the homepage after logout' do
    login_as("Jack")
    click_button "Log out"
    expect(page).not_to have_content "Jack"
  end
end
