Rails.application.config.middleware.use OmniAuth::Builder do
  provider :linkedin, ENV['75b8c68vo1cskn'], ENV['kw2alXeMYAYF85lW'], :scope => 'r_fullprofile'
end