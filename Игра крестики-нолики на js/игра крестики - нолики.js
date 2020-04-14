<!DOCTYPE html>
<html>
<head>
<title>Глава1</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
</head>
<style>
	div{
		margin-left: 300px;
		margin-top: 50px;
		border: 1px solid;
		width: 120px;
	}
	p{
		padding-left: 10px;
	}
	table{
		margin-top: -150px;
		border-spacing: 0;
	}
	td{
		border: 1px solid;
		width: 50px;
		height: 50px;
		text-align: center;
		cursor: pointer;
		
	}

</style>
<body>
	<div>
	  <p>Выиграл <strong>x:</strong><span>0</span></p>
	  <p>Выиграл <strong>o:</strong><span>0</span></p>
	  <p>Ничья:<span>0</span></p>
	</div>
  <table id='table'>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
  </table><br>
  <button>Начать сначала</button>
<script>
	var button = document.querySelector('button');
	var tds = document.querySelectorAll('td');
	var trs = document.querySelectorAll('tr');
	  for(var i = 0;i < tds.length;i++){
		tds[i].addEventListener('click', games);
		}
		var res = '';
		var step = 0;
		  function games(){
			var play1 = 'X';
			var play2 = 'O';
			
			  if(play1 != res){
			    this.innerHTML  = play1;			   
			  }
			  else{
				 this.innerHTML = play2;				 
			  }
			   res = this.innerHTML;
			   
			   this.removeEventListener('click', games);
			   
			   ++step;
			  
			   winner(play1, play2, step);
			     
			  
			 }
			 
			  function winner(a, b, stepCount){
			    var line1 = [table.rows[0].cells[0].innerHTML, table.rows[0].cells[1].innerHTML, table.rows[0].cells[2].innerHTML];
				var line2 = [table.rows[1].cells[0].innerHTML, table.rows[1].cells[1].innerHTML, table.rows[1].cells[2].innerHTML];
				var line3 = [table.rows[2].cells[0].innerHTML, table.rows[2].cells[1].innerHTML, table.rows[2].cells[2].innerHTML];
				var diagL = [table.rows[0].cells[0].innerHTML, table.rows[1].cells[1].innerHTML, table.rows[2].cells[2].innerHTML];
				var diagR = [table.rows[0].cells[2].innerHTML, table.rows[1].cells[1].innerHTML, table.rows[2].cells[0].innerHTML];
				var column1 = [table.rows[0].cells[0].innerHTML, table.rows[1].cells[0].innerHTML, table.rows[2].cells[0].innerHTML];
				var column2 = [table.rows[0].cells[1].innerHTML, table.rows[1].cells[1].innerHTML, table.rows[2].cells[1].innerHTML];
				var column3 = [table.rows[0].cells[2].innerHTML, table.rows[1].cells[2].innerHTML, table.rows[2].cells[2].innerHTML];
				
				
				   
				   if(a == line1[0]&&a == line1[1]&&a == line1[2]
					||a == line2[0]&&a == line2[1]&&a == line2[2]
					||a == line3[0]&&a == line3[1]&&a == line3[2]
					||a == diagL[0]&&a == diagL[1]&&a == diagL[2]
					||a == diagR[0]&&a == diagR[1]&&a == diagR[2]
					||a == column1[0]&&a == column1[1]&&a == column1[2]
					||a == column2[0]&&a == column2[1]&&a == column2[2]
					||a == column3[0]&&a == column3[1]&&a == column3[2]){
					
					var text = 'Победил 1 игрок';
				     alert(text);
					   var buffer1 = (function(){
					     var count = 0;
						   return function(){
						    return ++count;
							}
					   })();
					   
					   result(text, buffer1());
					  
					   
					  for(var i = 0;i < tds.length;i++){
					   tds[i].removeEventListener('click', games);
					 
					 }
					}  
				   if(b == line1[0]&&b == line1[1]&&b == line1[2]
					||b == line2[0]&&b == line2[1]&&b == line2[2]
					||b == line3[0]&&b == line3[1]&&b == line3[2]
					||b == diagL[0]&&b == diagL[1]&&b == diagL[2]
					||b == diagR[0]&&b == diagR[1]&&b == diagR[2]
					||b == column1[0]&&b == column1[1]&&b == column1[2]
					||b == column2[0]&&b == column2[1]&&b == column2[2]
					||b == column3[0]&&b == column3[1]&&b == column3[2]){
					
					 var text = 'Победил 2 игрок';
				     alert('Победил 2 игрок');
					 
					  var buffer2 = (function(){
					     var count = 0;
						   return function(){
						    return ++count;
							}
					   })();
					   
					   result(text, buffer2());
					   
					   
					 for(var i = 0;i < tds.length;i++){
					   tds[i].removeEventListener('click', games);
					 
					 }
				}
				
				if(step >= 9 && !text){
				  
					var text = 'Ничья';
					alert(text);
					
					var buffer3 = (function(){
					     var count = 0;
						   return function(){
						    return ++count;
							}
					   })();
					   
					   result(text, buffer3());
				}
				button.onclick = function restart(){
					 step = 0;  
					 text = '';
					 res = '';
					 
						for(var i = 0;i < tds.length;i++){
						 tds[i].innerHTML = '';
					     tds[i].addEventListener('click', games);
					   }
					  } 
				
					   
			}
					
				
				   
			  function result(text, buffer){
				var span = document.querySelectorAll('span');
				    if(text == 'Победил 1 игрок'){
						span[0].innerHTML =Number(span[0].innerHTML) + buffer;
					}
					if(text == 'Победил 2 игрок'){
						span[1].innerHTML =Number(span[1].innerHTML) + buffer;
					}
					if(text == 'Ничья'){
						span[2].innerHTML =Number(span[2].innerHTML) + buffer;
					}
			  }
		  
</script>
</body>
</html>