(function () {
    
	var fsicon = document.createElement('button');
	fsicon.innerHTML = "FULL SCREEN"
	fsicon.value = "FULL SCREEN"
	// var srcFSI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAI1JREFUeNrsV0EOwCAI6w/8/6lP8gk8ZTuPLUoirltCEy8mpY0iIAAcg0WsgxONreIRE4+bhnzYr05AkgO2wQQHV3wxwAmBieJe6xY8w0Q0BlcDZHOngXqA1zPziE68BTjNmWDGM4qKexNEoVAoJPVzWSGSlmJpM3q1HcsHEvlI9omhtL5m9TWT5cApwAD/IigEZttSgAAAAABJRU5ErkJggg==';
	// var srcFSIexit = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgEApAAAAAZ0Uk5TAA+fz9/vpTOW9gAAAJNJREFUKM/NkkEKwyAUBSeeQOoFDAX3duERcoQcQJN3/yN08RVLUui2fyE4Ph/IyPLiY56eoDj3TpmiOkFSI2lEPE6qtgSA3A+TtBaA9pAq4KRTANr77SQZUO93E1j9sg9wegDCTGQAygTN80fz+3FsAxx8T1w7nHQY2CySpJgAqpMq3QVANA3mwo/6eld5k339Dm89PDdxiEGVaQAAAABJRU5ErkJggg==';
	// fsicon.src = srcFSI;
	fsicon.id = 'fsicon';
	
	fsicon.style.opacity = 0.9;
	fsicon.style.filter = 'alpha( opacity=5000 )';
	fsicon.style.cursor = 'pointer';
	fsicon.style.zIndex = 2000;
	fsicon.style.top = '10px';
	fsicon.style.right = '10px';
	fsicon.style.position = 'fixed';
		
		
	var cto; 
	fsicon.style.transitionDuration = '1s'; 
	document.onmousemove = function(){ 
		clearTimeout(cto); 
		fsicon.style.opacity = 0.9;  
		cto = setTimeout(function(){fsicon.style.opacity = 0;},5000);
	}
	
	
	document.body.appendChild(fsicon);
	
	
		var fsicon = document.getElementById("fsicon");
	
		
	
		if (fsicon) {
			fsicon.addEventListener("click", function () {
			  if(fsicon.getAttribute('value')==="FULL SCREEN"){
					  console.log('hello')
					var docElm = document.documentElement;
					if (docElm.requestFullscreen) {
						docElm.requestFullscreen();
					}
					else if (docElm.mozRequestFullScreen) {
						docElm.mozRequestFullScreen();
					}
					else if (docElm.webkitRequestFullScreen) {
						docElm.webkitRequestFullScreen();
					}
				}else{
					if (document.exitFullscreen) {
						document.exitFullscreen();
					}
					else if (document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					}
					else if (document.webkitCancelFullScreen) {
						document.webkitCancelFullScreen();
					}
				}
				
			}, false);
		}
		if (fsicon) {
			document.addEventListener("fullscreenchange", function () {
				 if(document.fullscreenElement){
					fsicon.setAttribute('value',"EXIT FULL SCREEN");
					fsicon.innerHTML = 'EXIT FULL SCREEN'
					// document.getElementById('whole_chat').style.marginTop = 450 + 'px'
					document.getElementById('closing').style.display = 'none'
					document.getElementById('MyClockDisplay').style.marginLeft = 74.38 + "%"
					document.getElementById('editor').style.height = 850 + 'px'
					document.getElementById('line_numbering_area').style.height = 850 + 'px'
				 }else{
					fsicon.setAttribute('value',"FULL SCREEN");
					fsicon.innerHTML = "FULL SCREEN"
					// document.getElementById('whole_chat').style.marginTop = 411 + 'px'
					document.getElementById('closing').style.display = 'inline-block'
					document.getElementById('MyClockDisplay').style.marginLeft = 20 + "%"
					document.getElementById('editor').style.height = 807 + 'px'
					document.getElementById('line_numbering_area').style.height = 807 + 'px'

	  let seconds = 10
      function timer(){
          let countdown = setInterval(function() {
            seconds--;
            document.getElementById("closing").innerText = `Change to full screen else exiting in ${seconds} seconds...`;
            
            if (seconds <= 0 || document.fullscreen == true) {
              document.getElementById('closing').style.display = 'none'
					    document.getElementById('MyClockDisplay').style.marginLeft = 74.38 + "%"
              clearInterval(countdown);}
            
            document.addEventListener("keydown", (e) => {
              if(e.keyCode == 122)
              {
               seconds = 10;
               document.getElementById('closing').style.display = 'none'
					     document.getElementById('MyClockDisplay').style.marginLeft = 74.38 + "%"
               clearInterval(countdown);
              }
            })
            
            }, 1000);
          }
        
      timer();
				 };
				
			}, false);
			
			document.addEventListener("mozfullscreenchange", function () {
				if(document.mozFullScreen){
					fsicon.setAttribute('value',"EXIT FULL SCREEN");
					fsicon.innerHTML = 'EXIT FULL SCREEN'
					// document.getElementById('whole_chat').style.marginTop = 400 + 'px'
					document.getElementById('closing').style.display = 'none'
					document.getElementById('MyClockDisplay').style.marginLeft = 74.38 + "%"
				 }else{
					fsicon.setAttribute('value',"FULL SCREEN");
					fsicon.innerHTML = "FULL SCREEN"
					// document.getElementById('whole_chat').style.marginTop = 350 + 'px'
					document.getElementById('closing').style.display = 'inline-block'
					document.getElementById('MyClockDisplay').style.marginLeft = 20 + "%"

					let seconds = 10
      function timer(){
          let countdown = setInterval(function() {
            seconds--;
            document.getElementById("closing").innerText = `Change to full screen else exiting in ${seconds} seconds...`;
            
            if (seconds <= 0 || document.fullscreen == true) {
              document.getElementById('closing').style.display = 'none'
					    document.getElementById('MyClockDisplay').style.marginLeft = 74.38 + "%"
              clearInterval(countdown);}
            
            document.addEventListener("keydown", (e) => {
              if(e.keyCode == 122)
              {
               seconds = 10;
               document.getElementById('closing').style.display = 'none'
					     document.getElementById('MyClockDisplay').style.marginLeft = 74.38 + "%"
               clearInterval(countdown);
              }
            })
            
            }, 1000);
          }
        
      timer();
				 };
			}, false);
			
			document.addEventListener("webkitfullscreenchange", function () {
				if(document.webkitIsFullScreen){
					fsicon.setAttribute('value',"EXIT FULL SCREEN");
					fsicon.innerHTML = 'EXIT FULL SCREEN'
					// document.getElementById('whole_chat').style.marginTop = 400 + 'px'
					document.getElementById('closing').style.display = 'none'
					document.getElementById('MyClockDisplay').style.marginLeft = 74.38 + "%"
				 }else{
					fsicon.setAttribute('value',"FULL SCREEN");
					fsicon.innerHTML = "FULL SCREEN"
					// document.getElementById('whole_chat').styl.width = 550 + 'px'
					document.getElementById('closing').style.display = 'inline-block'
					document.getElementById('MyClockDisplay').style.marginLeft = 20 + "%"

					let seconds = 10
      function timer(){
          let countdown = setInterval(function() {
            seconds--;
            document.getElementById("closing").innerText = `Change to full screen else exiting in ${seconds} seconds...`;
            
            if (seconds <= 0 || document.fullscreen == true) {
              document.getElementById('closing').style.display = 'none'
					    document.getElementById('MyClockDisplay').style.marginLeft = 74.38 + "%"
              clearInterval(countdown);}
            
            document.addEventListener("keydown", (e) => {
              if(e.keyCode == 122)
              {
               seconds = 10;
               document.getElementById('closing').style.display = 'none'
					     document.getElementById('MyClockDisplay').style.marginLeft = 74.38 + "%"
               clearInterval(countdown);
              }
            })
            
            }, 1000);
          }
        
      timer();
				 };
			}, false);
		}
		
	})();
	
	if(!document.fullscreen){

		setTimeout(function(){
				isFullScreen = document.fullscreen;
				if(isFullScreen == false){
				window.close();
				}
			},10000)
	}
	document.addEventListener('fullscreenchange',function(){ 
		var isFullScreen;
		isFullScreen = document.fullscreen;
		if(isFullScreen == false)
		{   
			// alert("Switch to Full Screen.Exiting in "+countt+" seconds.");
			//countt=countt-5;
	
			setTimeout(function(){
				isFullScreen = document.fullscreen;
				if(isFullScreen == false){
				window.close();
				}
			},10000)
			
		}
		 });
	
	document.addEventListener( 'visibilitychange' , function() {
	
		if (document.hasFocus()) {
			console.log('well back');
		} else {
			window.close()
		}
	}, false );
	
	 // window.onload= function(){
	 // 		alert('Change to full screen.Else you will be exited automatically')
	 // 		if(fsicon.value = "EXIT FULL SCREEN"){
	
	
	 //    		// setTimeout(function() {
	 //    		// 	if(fsicon.value = "EXIT FULL SCREEN")
	 //    		// 		window.close()
	 //    		// }, 10000)
	 //    	}
	 //    }
	
	// document.addEventListener('fullscreenchange', function() {
	// 	console.log(fsicon.value)
		
	
	// })
