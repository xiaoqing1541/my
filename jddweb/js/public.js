			$(function(){
//			导航切换
				$('.u51-header .menu>li').click(function(){
				$('.u51-header .menu>li').removeClass('acitve');
					$(this).addClass('active');
				});
					$(document).scroll(heNav);
			
				   function heNav(){
					//可视区高度
					var viewH = $(window).height();
					//滚动距离
					var scrollH = $(document).scrollTop();
						
					if(scrollH >80){
						$('.u51-header').addClass('white');
					}else{
						$('.u51-header').removeClass('white');
					}
				}
			})