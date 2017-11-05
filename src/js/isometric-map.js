// Isometric Map Generator
// A jQuery plugin for generating a 2D isometric map
// version 1.0, January 01 2017
// by Christian Burd

;(function($) {

    $.fn.isometric_map = function( options ) {

        var defaults = {
            
			on_load: function() {}			
        }

        var plugin = this;
        var container = $(this);

        plugin.settings = {}

        var init_grid = function() {
            for(i = 0; i < 100; i++) {
                $("#isometric_map_grid").append("<div class='cube'></div>");
            }
        }

        var init = function() {
            // init settings and compile user options
            plugin.settings = $.extend({
                on_load: function() {}                
            }, defaults, options);            
            
            container.append("<div id='isometric_map_container'></div>");

            $("#isometric_map_container").append("<div id='isometric_map_grid'></div>");
        
            init_grid();
        }

        init();

    }

})(jQuery);