var animationer= new Object();

animationer.fadeIn = function  (obj) {
	obj.style.opacity = 0;
	var objOpa = null;

	objOpa = parseInt(obj.style.opacity);
	var fadeIn = setInterval(function(){
		objOpa = objOpa + 0.1;
		console.log(objOpa);
		obj.style.opacity = objOpa;
		if(objOpa>=1){
			clearInterval(fadeIn);
		}
	}, 50)
	
}

window.animationer = animationer;