function stringToWordArray1(str){
	var arr=[];
	var substr="";
	for(var i=0; i<=str.length; i++){
		if(str[i]==" "||i==str.length){
			arr.push(substr);
			substr="";
		}else if(str[i]=="\\" && (str[i+1]=="t"||str[i+1]=="n")){
			arr.push(substr);
			substr="";
			i++;
		}else{
			substr+=str[i];
		}
	}
	return arr;
}
function stringToWordArray2(str){
	var arr=[];
	var substr="";
	for(var i=0; i<=str.length; i++){
		if((str[i]>="A"&&str[i]<="Z")||(str[i]>="a"&&str[i]<="z")){
			substr+=str[i];
		}else if(substr!=""||i==str.length){
			arr.push(substr);
			substr="";
		}
		if(str[i]=="\\"&&(str[i+1]=="t"||str[i+1]=="n")){
			i++;
		}
	}
	return arr;
}
function longestWord1(str){
	var word="";
	var substr="";
	for(var i=0; i<str.length; i++){
		if(str[i]==" "){
			if(substr.length>word.length){
				word=substr;
			}
			substr="";
		}else if(str[i]=="\\"&&(str[i+1]=="t"||str[i+1]=="n")){
			if(substr.length>word.length){
				word=substr;
			}
			substr="";
			i++;
		}else{
			substr+=str[i];
		}
	}
	return word;
}
function longestWord2(str){
	var word="";
	var substr="";
	for(var i=0; i<str.length; i++){
		if((str[i]>="A"&&str[i]<="Z")||(str[i]>="a"&&str[i]<="z")){
			substr+=str[i];
		}else{
			if(substr.length>word.length){
				word=substr;
			}
			substr="";
		}
		if(str[i]=="\\"&&(str[i+1]=="t"||str[i+1]=="n")){
			i++;
		}
	}
	return word;
}
function reverseWordOrder1(str){
	var newstr="";
	var end=str.length-1;
	for(var i=end; i>=0; i--){
		if(str[i-1]==" "||i==0){
			for(var j=i; j<=end; j++){
				newstr+=str[j];
			}
			if(i){
				newstr+=" ";
			}
			end=i-2;
		}
	}
	return newstr;
}
function reverseWordOrder2(str){
	var newstr="";
	var endstr="";
	var end=str.length-1;
	while(!(str[end]>="A"&&str[end]<="Z")&&!(str[end]>="a"&&str[end]<="z")){
		end--;
	}
	for(var i=end+1; i<str.length; i++){
		endstr+=str[i];
	}
	for(var i=end; i>=0; i--){
		if(str[i-1]==" "||i==0){
			for(var j=i; j<=end; j++){
				newstr+=str[j].toLowerCase();
				if(newstr.length==1){
					newstr=newstr.toUpperCase();
				}
			}
			if(i){
				end=i-1;
				while(!(str[end]>="A"&&str[end]<="Z")&&!(str[end]>="a"&&str[end]<="z")){
					end--;
				}
				for(var j=end+1; j<i; j++){
					newstr+=str[j];
				}
				i=end;
			}
		}
	}
	newstr+=endstr;
	return newstr;
}
function uniqueWords1(str){
	var substr="";
	var arr=[];
	for(var i=0; i<=str.length; i++){
		if(str[i]==" "||i==str.length){
			var unique=true;
			for(var j=0; j<arr.length; j++){
				if(substr==arr[j][0]){
					unique=false;
					arr[j][1]+=1;
					break;
				}
			}
			if(unique){
				arr.push([substr,1]);
			}
			substr="";
		}else{
			substr+=str[i];
		}
	}
	unique=[];
	for(i=0; i<arr.length; i++){
		if(arr[i][1]==1){
			unique.push(arr[i][0]);
		}
	}
	var newstr=unique[0];
	for(i=1; i<unique.length; i++){
		newstr+=" "+unique[i];
	}
	return newstr;
}
function uniqueWords2(str){
	var substr="";
	var arr=[];
	for(var i=0; i<=str.length; i++){
		if((str[i]>="A"&&str[i]<="Z")||(str[i]>="a"&&str[i]<="z")){
			substr+=str[i].toLowerCase();
		}else if(substr!=""){
			var unique=true;
			for(var j=0; j<arr.length; j++){
				if(substr==arr[j][0]){
					unique=false;
					arr[j][1]+=1;
					break;
				}
			}
			if(unique){
				arr.push([substr,1]);
			}
			substr="";
		}
	}
	unique=[];
	for(i=0; i<arr.length; i++){
		if(arr[i][1]==1){
			unique.push(arr[i][0]);
		}
	}
	var newstr=unique[0];
	for(i=1; i<unique.length; i++){
		newstr+=" "+unique[i];
	}
	return newstr;
}
function rotate(str, num){
	num=num%str.length;
	newstr="";
	for(var i=0; i<str.length; i++){
		var idx=num+i;
		if(idx>=str.length){
			idx-=str.length;
		}
		newstr+=str[idx];
	}
	return newstr;
}
function isRotation(str1, str2){
	if(str1.length!=str2.length){
		return false;
	}
	var length=str1.length;
	for(var i=0; i<length; i++){
		var rotation=true;
		for(var j=0; j<length; j++){
			var idx=i+j;
			if(idx>=length){
				idx-=length;
			}
			if(str1[j]!=str2[idx]){
				rotation=false;
				break;
			}
		}
		if(rotation){
			return true;
		}
	}
	return false;
}
function censor(str, arr){
	var newstr="";
	for(var i=0; i<str.length; i++){
		for(var j=0; j<arr.length; j++){
			var naughty=true;
			for(var k=0; k<arr[j].length; k++){
				if(str[i+k].toLowerCase()!=arr[j][k]){
					naughty=false;
					break;
				}
			}
			if(naughty){
				for(k=0; k<arr[j].length; k++){
					newstr+="x";
				}
				i+=k-1;
				break;
			}
		}
		if(!naughty){
			newstr+=str[i];
		}
	}
	return newstr;
}
function badCharacters(str1, str2){
	var newstr="";
	for(var i=0; i<str1.length; i++){
		var good=true;
		for(var j=0; j<str2.length; j++){
			if(str1[i]==str2[j]){
				good=false;
				break;
			}
		}
		if(good){
			newstr+=str1[i];
		}
	}
	return newstr;
}
function geneticMarker(arr, str){
	for(var i=0; i<arr.length; i++){
		if(arr[i].length!=str.length){
			continue;
		}
		var match=true;
		for(var j=0; j<str.length; j++){
			if(arr[i][j]!=str[j]&&arr[i][j]!="?"){
				match=false;
				break;
			}
		}
		if(match){
			return true;
		}
	}
	return false;
}
function optimalSequence(arr, sequence=[]){
	if(arr.length==0){
		return sequence;
	}
	var opstr=null;
	var optimal=null;
	for(var i=0; i<arr.length; i++){
		var str="";
		var ordered=true;
		for(var j=0; j<arr[i].length; j++){
			if(arr[i][j]=="?"){
				if(sequence.length){
					str+=sequence[sequence.length-1][j];	
				}else{
					str+="A";
				}
			}else{
				if(sequence.length&&arr[i][j]<sequence[sequence.length-1][j]){
					ordered=false;
					break;
				}else{
					str+=arr[i][j];
				}
			}
		}
		if(ordered&&(!opstr||str<opstr)){
			var test=sequence.slice();
			test.push(str);
			var result=optimalSequence(arr.slice(0,i).concat(arr.slice(i+1)), test);
			if(result){
				opstr=str;
				optimal=result;
			}
		}
	}
	return optimal;
}