module ModalWindows
  module ApplicationControllerPatch
    def self.included(base)
      base.extend(ClassMethods)
      base.send(:include, InstanceMethods)  
  
      base.class_eval do
        include ModalWindowsHelper
        helper :modal_windows     
      end
    end
  
    module ClassMethods   
    end
    
    module InstanceMethods 
    end
  
  end
end
