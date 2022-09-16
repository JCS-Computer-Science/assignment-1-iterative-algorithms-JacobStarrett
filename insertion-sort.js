function insertionSort(array) {
	
	for(var i=0;i<array.length;i++){
		if(array[i]>array[i+1]){
			let temp=array[i+1]
			array[i+1]=array[i]
			array[i]=temp
		}
	}




	return array;
}

module.exports = insertionSort;

/*
 ** For each element in the array, swap it with the element
 ** before it over and over as long as the element before it
 ** is bigger
 */