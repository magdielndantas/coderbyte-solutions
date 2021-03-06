/*Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will
represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing
the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

function FindIntersection(strArr) { 
  const [list, seconList] = strArr.map(s => s.split(", "))

  var map = {}
  var result = []
  
  for(element of list){
    map[element] = true
  }

  for(element of seconList){
    if(map[element]){
      result.push(element)
    }
  }
  return result.length ? result.join(',') : false; 
}
   
// keep this function call here 
console.log(FindIntersection(readline()));
