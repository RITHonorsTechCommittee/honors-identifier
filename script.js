$(document).ready(function(){
	//$(".d_gactr .d_gact .d_gact tbody tr .d_gn").fadeTo(0,0);
	var $selector=$(".d_gn > .d2l-select-container > select");
	/*$(".d_gn > .d2l-select-container > select option:eq(0)").prop('selected', false);
	$(".d_gn > .d2l-select-container > select option:eq(1)").prop('selected', false);
	$(".d_gn > .d2l-select-container > select option:eq(2)").prop('selected', false);
	$(".d_gn > .d2l-select-container > select option:eq(3)").prop('selected', false);
	$(".d_gn > .d2l-select-container > select option:eq(4)").prop('selected', true);*/
	console.log($('.d_gn > .d2l-select-container > select option[value=200]').attr('selected'));
	$('.d_gn > .d2l-select-container > select option[value=10]').removeAttr('selected');
		$('.d_gn > .d2l-select-container > select option[value=20]').removeAttr('selected');
		$('.d_gn > .d2l-select-container > select option[value=50]').removeAttr('selected');
		$('.d_gn > .d2l-select-container > select option[value=100]').removeAttr('selected');
		$('.d_gn > .d2l-select-container > select option[value=200]').attr('selected', 'selected');
		console.log($('.d_gn > .d2l-select-container > select option[value=200]').attr('selected'));
	/*if($('.d_gn > .d2l-select-container > select option[value=200]').attr('selected')!="selected"){
	
		
		location.reload();
		}*/
	//$selector.val("200");
	//$selector.click();
	var rawFile = new XMLHttpRequest();
	chrome.storage.local.get(function(result){
		var today=new Date();
		var year=today.getFullYear();
		var month=today.getMonth()+1;
		if(month<9)year--;
		var file;
		var time;
		file=result.file;
		time=result.time;
		if(file&&time&&year<=time){
			$(".fgskip td:nth-child(3)").after("<td style=\"width:10%\">&nbsp;</td>");
			var $usernameArray=$("td:nth-child(4) label").toArray();
			var usernameArray=[];
			for(var i=0;i<$usernameArray.length;i++){
				usernameArray.push($($usernameArray[i]).html())
			}
			//$(".d_gh th:nth-child(3)").after("<th scope=\"col\" class=\"d_hch d_gc\"><label>Honors</label></th>");
			$(".d_gh th:nth-child(3)").after("<th scope=\"col\" class=\"d_hch d_gc\"><a href=\"#abc\" id=\"hLink\" title=\"Sort by Honors\">Honors</a></th>");
			$("#hLink").click(function(){
				$after=$(".d_gh");
				moved=0;
				var num=$("#z_h>tbody>tr").length;
				console.log(num+" "+moved);
				for(var i=num-1;i>=moved+4;i--){
					var $subrow=$("#z_h tbody tr:nth-child("+i+")");
					if(isHonors($subrow.children().eq(4).children().html())){
						$after.after($subrow);
						i++;
						moved++;
					}
				}
			});
			for(var i=0;i<usernameArray.length;i++){
				if(isHonors(usernameArray[i])){
					$("tbody tr:nth-child("+(i+4)+") td:nth-child(4)").before("<td class=\"htd\"><img class=\"himg\" src=\"http://i.imgur.com/e6JGjx2.png\" /></td>");
				}else{
					$("tbody tr:nth-child("+(i+4)+") td:nth-child(4)").before("<td class=\"htd\"></td>");
				}
			}
			function isHonors(username){
				return result.file.indexOf(username)!=-1;
			};
			
			
		}
		else{
			r=confirm("Honors tagger needs to be updated. Click ok to update");
			if(r){
				window.open(chrome.extension.getURL("options.html"));
			}
		}
	});
});

