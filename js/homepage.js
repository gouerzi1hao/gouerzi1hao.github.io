for(n=1;n<3;n++){
	var page='pagenavi'+n;
	var mslide='slider'+n;
	var mtitle='emtitle'+n;
	arrdiv = 'arrdiv' + n;
	var as=document.getElementById(page).getElementsByTagName('a');
	var tt=new TouchSlider({id:mslide,'auto':'-1',fx:'ease-out',direction:'left',speed:600,timeout:5000,'before':function(index){
		var as=document.getElementById(this.page).getElementsByTagName('a');
		as[this.p].className='';
		as[index].className='active';
		this.p=index;
		var txt=as[index].innerText;
		$("#"+this.page).parent().find('.emtitle').text(txt);
		var txturl=as[index].getAttribute('href');		
		var turl=txturl.split('#');
		$("#"+this.page).parent().find('.go_btn').attr('href',turl[1]);
	}});
	tt.page = page;
	tt.p = 0;
	//console.dir(tt); console.dir(tt.__proto__);
	for(var i=0;i<as.length;i++){
		(function(){
			var j=i;
			as[j].tt = tt;
			as[j].onclick=function(){
				this.tt.slide(j);
				return false;
			}
		})();
	}
}