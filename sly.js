var counter = 0;  //Set default image
function foo(){
	if ( 0 < counter){
		counter--
			console.log(counter)   
			classes();
	}
	window.setTimeout(foo, 1);
}

foo()
	$('#gallery_btn-next').click(function(e){
		console.log('adf')

			counter++;
	})

$('#gallery_btn-prev').click(function(e){
	counter--;
})

function classes(){ 
	$('.sly ul').append($('.sly li:first-child')) 
}

function backClasses(){  
	$('.sly ul').prepend($('.sly li:last-child')) 
}

function bar(){
	if ( 0 > counter){
		counter++;
		console.log(counter)   
			backClasses();
	}
	window.setTimeout(bar, 1);
}

bar()



	console.log($(".sly li").css('width'));
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	console.log(w);
	console.log(Math.round((parseInt($(".sly li").css('width'), 10) / w )*100))


	var viewPortWidth = Math.round((parseInt($(".sly li").css('width'), 10) / w )*100);
	var viewPortHeight = Math.round((parseInt($(".sly li").css('height'), 10) / h )*100);

	console.log(viewPortWidth);

	/*
.sly li:nth-child(2){
color:yellow;	
left:0;
top:10vw;
}
.sly li:nth-child(3){	
color:red;
left: 50vw;
top: 10vw;
}

.sly li:nth-child(4){	
color:red;
left: 100vw;
top: 10vw;
}

.sly li:nth-child(5){	
color:red;
left: 150vw;
top: 10vw;
}*/


	var stylez = '' 
	for(var i=0; i<$('.sly ul').children().length; i++){

		stylez += ".sly li:nth-child("+(i+1)+"){left:"+((i*viewPortWidth - viewPortWidth))+"vw;}"

	}

console.log(stylez)

	var sheet = document.createElement('style')

	sheet.innerHTML = "body { background-color: green;}";
	document.body.appendChild(sheet);
	console.log(document);
	sheet.innerHTML = stylez;


	console.log(sheet);
	document.body.appendChild(sheet);





