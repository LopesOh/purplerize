var btn = {

	/*invert the color pass by param*/
	invert_color:function(color){

		var colors = color.replace(/[^0-9,]/g, '').split(',');
				red = 255 - colors[0],
				green = 255 - colors[1],
				blue = 255 - colors[2];

		return 'rgb('+red+','+green+','+blue+')';	

	},
	//start object
	start : function(){

		var map = {},
			invert_color = this.invert_color;/*this recognize the function 
				inside start function*/

		$('a[class*=btn]').mouseenter(function(){
			change_color($(this));
		});
		
		$('a[class*=btn]').mouseleave(function(){
			return_color($(this));			
		});	


		//change the color of an element
		function change_color(element, effect){

			map = {
				color:element.css("color"),
				bgcolor:element.css("background-color")
			};			

			element.attr('style', 'background-color: '+ 
				invert_color(map.bgcolor) +
				' !important; color: '+ invert_color(map.color)+ ' !important');

		}

		//return the original color of an element
		function return_color(element, effect){

			element.css('color', map.color);
			element.css('background-color', map.bgcolor);	

			map = {};
		}
	}

	},
	menu = {

		start: function(){		
			//map of opened menus
			var map = [],
				submenu_map = [];		
		
			$('.menu > li').click(function(){
				
				//if some another menu is opened, hide but last			
				while (map.length > 0){
					map.shift().element.hide();
				}

				//positioning the menu in right position
				$(this).children('ul').css('left', $(this).position().left );
				$(this).children('ul').show();
				
				//adding to map			
				map.push({
					element:$(this).children('ul')
				});						

			});
			
			//if out of body of menu, hide it
			$('.menu li ul').mouseleave(function(){	
				map = [];
				$(this).hide();

				//hide submenus
				$('.sub').hide();
			});	

			//submenus
			$('.sub').parent().click(function(){				

				var x = "100%",
					y = $(this).position().top;
				
				$(this).children('ul').css('left', x );
				$(this).children('ul').css('top', y );
				$(this).children('ul').show();				

			});		
		}
};

$(document).ready(function(){
	//start of objects
	btn.start();
	menu.start();
});
