
//qweqwe
$(document).ready(function(){
	$("#response").fadeTo(0,0);
	$inputElement=document.getElementById ("selector");
	function save_options() {
		var file = $inputElement.files[0];
		if(file){
		console.log("file found");
			var r=new FileReader();
			r.onload=function(e){
			console.log("file loaded");
				var contents=e.target.result;
				var today = file.lastModifiedDate;
				console.log(today);
				var month=today.getMonth()+1;
				var year=today.getFullYear();
				if(month<9)year--;
				console.log(year);
				chrome.storage.local.set({file:contents, time:year}, function(){
					console.log("file saved");
					$("#response").fadeTo(0,100,function(){
						$("#response").fadeTo(1000,0);
					});
				});
			}
			r.readAsText(file);
		}
	};
	document.getElementById('save').addEventListener('click',save_options);
});