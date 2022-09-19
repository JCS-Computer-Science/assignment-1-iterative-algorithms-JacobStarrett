function linearSearch(array, searchTerm) {
	
	for(let i = 0; i<array.length;i++){
		if(array[i]===searchTerm){
			return i;
		} 
	}

return -1;

}

module.exports = linearSearch;

/*
 ** Check each element from start to finish
 ** until you find an element that matches the search term
 **
 ** Return the index of the found element
 */