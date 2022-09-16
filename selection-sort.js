function selectionSort(array) {
	
	for(var i=0;i<array.length;i++){
		let min = i;

		for(var j = i+1; j<array.length;j++){
			if(array[j]<array[min]){
				min=j;
			}
		}
		if(min != i){
			let temp = array[i]
			array[i]= array[min]
			array[min]= temp;
		}
	}




	return array;
}

module.exports = selectionSort;

/*
 ** Search through the whole array for the smallest element
 ** then swap it with the first element.
 ** Next, search through the whole array (except the first element)
 ** for the smallest, then swap it with the second element.
 ** Continue like this until you have only one element left.
 */