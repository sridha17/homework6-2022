var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";

});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

let slowButton = document.querySelector("#slower");
let CountSlowButton = 0;
slowButton.addEventListener("click", function() {
	CountSlowButton +=1;
	video.playbackRate -= (0.05 * video.playbackRate) 
	speed = video.playbackRate
	console.log("New speed is " + speed);
});

let speedButton = document.querySelector("#faster");
let CountSpeedButton = 0;
speedButton.addEventListener("click", function() {
	CountSpeedButton +=1;
	video.playbackRate += (0.05 * video.playbackRate) 
	speed = video.playbackRate
	console.log("New speed is " + speed);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	video.currentTime += 15;
	if (video.currentTime == video.duration){
		video.currentTime = 0;
		console.log("Going back to beginning")
		console.log("New location " + video.currentTime);
	} 
	else{
		console.log("New location " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		this.innerHTML = "Unmute"
	}
	else{
			this.innerHTML = "Mute"
			video.muted = false;
	}
});

let slider = document.querySelector("#slider");
slider.addEventListener("change", function(){   
	video.volume = slider.value / 100;  
	console.log(video.volume); 
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";

});  


document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("video").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").classList.remove("oldSchool");
});
