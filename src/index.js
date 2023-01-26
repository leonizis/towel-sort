
// You should implement your task here.

module.exports = function towelSort (matrix) {
  result = [];
  if(!matrix){
    return [];
  }
  else if(matrix == []){
    return result;
  }else{
  for(let i = 1; i < matrix.length; i = i + 2){
    matrix[i] = matrix[i].reverse();
    
  }
  for(let j = 0; j < matrix.length; j++){  
    for(let l = 0; l < matrix[j].length; l++){
      result.push(matrix[j][l]);  

    }
  }
  console.log(result)
  return result;}
}



