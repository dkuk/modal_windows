## Modal windows

#### Plugin for Redmine

Redmine modal window plugin that adds simple helper for modal window generation. 
Window content can be static or async loaded from link url.
Modal windows can be closed on mouseleave or mouseclick on area outside window.
Window appears left or right from the link depend of available page space. 
If there are not enought space from both sides, window will be resized to max available. 

Sample:
* `link_to_modal_window('Modal with dynamic loaded content', {:controller => 'doc_ver', :action=> 'auto_user', :q => ''})` - default modal - disappears on mouseleave or mouseclick.

![sample](https://github.com/dkuk/modal_windows/raw/master/screenshots/sample.png "sample")
![sample2](https://github.com/dkuk/modal_windows/raw/master/screenshots/sample2.png "sample2")

Plugin also integrates Lightview (http://projects.nickstakenburg.com/lightview) into Redmine. Be awere! Lightview library avalible for free only for non-commercial use.
Read license please: http://projects.nickstakenburg.com/lightview/license

#### Installation
To install plugin, go to the folder "plugins" in root directory of Redmine.
Clone plugin in that folder.

		git clone https://github.com/dkuk/modal_windows.git

Restart your web-server.

#### Supported Redmine, Ruby and Rails versions.

Plugin aims to support and is tested under the following Redmine implementations:
* Redmine 2.3.1
* Redmine 2.3.2
* Redmine 2.3.3

Plugin aims to support and is tested under the following Ruby implementations:
* Ruby 1.9.2
* Ruby 1.9.3
* Ruby 2.0.0

Plugin aims to support and is tested under the following Rails implementations:
* Rails 3.2.13

#### Copyright
Copyright (c) 2011-2013 Vladimir Pitin, Danil Kukhlevskiy.
