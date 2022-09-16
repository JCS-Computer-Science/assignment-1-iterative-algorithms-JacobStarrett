function bubbleSort(array) {
	
    for (var num = 0; num < array.length; num++){

        for (var num2 = 0; num2 < (array.length- num - 1); num2++){

            if(array[num2] > array[num2+1]){
                var temp = array[num2]
                array[num2]=array[num2+1]
                array[num2+1]=temp
            }

        }



    }

    



	return array;
}

module.exports = bubbleSort;

/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */