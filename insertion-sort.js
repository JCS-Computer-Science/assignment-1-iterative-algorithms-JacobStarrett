function insertionSort(array) {
	
	for(let i=0;i<array.length;i++){

		for (let q = 0; q < (array.length- i - 1); q++){
		if(array[q]>array[q+1]){
			let temp=array[q]
			array[q]=array[q+1]
			array[q+1]=temp
		}
		
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