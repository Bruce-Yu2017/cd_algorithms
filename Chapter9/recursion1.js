function rSigma(num){
    num=num-num%1;
    if(num==1){
        return 1;
    }
    if(num>1){
        return rSigma(num-1)+num;
    }else{
        return rSigma(num+1)+num;
    }
}
function rFact(num){
    num=num-num%1;
    if(num<=0){
        return 1;
    }
    return rFact(num-1)*num;
}
function floodFill(canvas2D, startXY, newColor){
	var oldColor=canvas2D[startXY[1]][startXY[0]];
	canvas2D[startXY[1]][startXY[0]]=newColor;
	if(canvas2D[startXY[1]-1][startXY[0]]===oldColor){
		floodFill(canvas2D, [startXY[0], startXY[1]-1], newColor)
	}
	if(canvas2D[startXY[1]][startXY[0]+1]===oldColor){
		floodFill(canvas2D, [startXY[0]+1, startXY[1]], newColor)
	}
	if(canvas2D[startXY[1]+1][startXY[0]]===oldColor){
		floodFill(canvas2D, [startXY[0], startXY[1]+1], newColor)
	}
	if(canvas2D[startXY[1]][startXY[0]-1]===oldColor){
		floodFill(canvas2D, [startXY[0]-1, startXY[1]], newColor)
	}
}
function rFib(num){
	num=num-num%1;
	if(num<=0){
		return 1;
	}else if(num===1){
		return 1;
	}
	return rFib(num-2)+rFib(num-1);
}
function rTrib(num){
	num=num-num%1;
	if(num<=1){
		return 0;
	}else if(num===2){
		return 1;
	}
	return rTrib(num-3)+rTrib(num-2)+rTrib(num-1);
}
function ackermann(num1, num2){
	if(num1===0){
		return num2+1;
	}else if(num2===0){
		return ackermann(num1-1, 1);
	}
	return ackermann(num-1, ackermann(num1, num2-1));
}
function Zib(num){
	if(num<=1){
		return 1;
	}else if(num===2){
		return 2;
	}else if(num%2){
		return Zib((num-1)/2)+Zib((num-1)/2-1)+1;
	}
	return Zib(num/2)+Zib(num/2+1)+1;
}
function bestZibNum(num){
	var index=num;
	while(num!=Zib(index)){
		index--;
		if(!index){
			return null;
		}
	}
	return index;
}
function rBinarySearch(arr, val){
	if(!arr.length){
		return false;
	}
	var search=Math.trunc(arr.length/2);
	if(arr[search]===val){
		return true;
	}else if(arr[search]>val){
		return rBinarySearch(arr.slice(0,search), val);
	}else{
		return rBinarySearch(arr.slice(search+1, arr.length), val);
	}
}
function rGCF1(a, b){
	if(a==b){
		return a;
	}else if(a>b){
		return rGCF1(a-b, b);
	}else if(b>a){
		return rGCF1(a, b-a);
	}
}
function rGCF2(a, b){
	if(a==b){
		return a;
	}
	while(a>b){
		a-=b;
	}
	while(b>a){
		b-=a;
	}
	return rGCF2(a,b);
}
function tarai(x, y, z){
	if(x<=y){
		return y;
	}
	return tarai(tarai(x-1, y, z), tarai(y-1, z, x), tarai(z-1, x, y));
}
function strSubsets(str, substr="", idx=0, arr=[]){
	if(idx==str.length){
		arr.push(substr);
		return arr;
	}
	strSubsets(str, substr, idx+1, arr);
	strSubsets(str, substr+str[idx], idx+1, arr);
	return arr;
}