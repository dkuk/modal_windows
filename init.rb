Redmine::Plugin.register :modal_windows do
  name 'Modal Windows plugin'
  author 'Danil Kukhlevskiy'
  description 'This is a plugin for Redmine'
  version '0.0.1'
  url 'http://'
  author_url 'http://'
end

Rails.application.config.to_prepare do
  ApplicationController.send(:include, ModalWindows::ApplicationControllerPatch)
end

require 'modal_windows/view_hooks'