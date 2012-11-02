module ModalWindows
  module ModalWindows
    class Hooks  < Redmine::Hook::ViewListener
      render_on(:view_layouts_base_html_head, :partial => "hooks/modal_windows/html_head")     
    end
  end
end