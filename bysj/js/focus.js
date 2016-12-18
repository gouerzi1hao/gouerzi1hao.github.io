/*导航效果*/
	$(window).load(function () {
	  $(".mobile-inner-header-icon").click(function(){
	  	$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
	  	$(".mobile-inner-nav").slideToggle(250);
	  	
	  });
	  $(".mobile-inner-nav a").each(function( index ) {
	  	$( this ).css({'animation-delay': (index/10)+'s'});
	  });


/*下拉*/

refresher.init({

	id:"wrapper",

	pullDownAction:Refresh,

	pullUpAction:Load

	});

		

	var generatedCount = 0;

function Refresh() {

	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!

		var el, li, i;

		el =document.querySelector("#wrapper ul");

		el.innerHTML='';

		for (i=0; i<11; i++) {

			li = document.createElement('li');

			li.appendChild(document.createTextNode('另 类 变 态 ' + (++generatedCount)));

		el.insertBefore(li, el.childNodes[0]);

		}	

		myScroll.refresh();/****remember to refresh when you action was completed！！！****/

	}, 1000);

}



function Load() {

	setTimeout(function () {// <-- Simulate network congestion, remove setTimeout from production!

		var el, li, i;

		el =document.querySelector("#wrapper ul");

		for (i=0; i<2; i++) {

			li = document.createElement('li');

			li.appendChild(document.createTextNode('另 类 重 口 ' + (++generatedCount)));

			el.appendChild(li, el.childNodes[0]);

		}

		myScroll.refresh();/****remember to refresh when you action was completed！！！****/

	}, 1000);

}



	});