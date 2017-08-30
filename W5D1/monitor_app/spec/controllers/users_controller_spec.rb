require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  subject(:user) do
    User.create!(
      username: 'michael',
      password: '123456'
    )
  end

  describe "POST #create" do
    it "redirect to goals index with valid params" do
      post :create, params: {user: {username: 'Mike', password: '123456'}}
      expect(response).to redirect_to(goals_url)
      # expect(response).to have_http_status(:success)
    end
    it "render the new link with invalid params" do
      post :create, params: {user: {username: 'kevin', password: ''}}
      expect(response).to render_template('new')
      expect(flash[:errors]).to be_present
    end
  end

  describe "GET #index" do
    it "renders the index template" do
      get :index
      expect(response).to render_template('index')
    end
  end

  describe "GET #show" do
    it "renders the show template" do
      get :show, params: { id: user.id }
      expect(response).to render_template('show')
    end
  end

end
