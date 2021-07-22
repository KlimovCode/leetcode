function mergeArr(root1, root2) {
  let result = [];
  
  let maxArrLength = 0;
  if(root1.length > root2.length)
  {
    maxArrLength = root1.length;
  }
  maxArrLength = root2.length;
  
  for (var i = 0; i < maxArrLength; i++)
  {
    root1[i] == null ? null : 0;
    root2[i] == null ? null : 0;
    
    if(root1[i] != null && root2[i] != null)
    {
      result[i] = root1[i] + root2[i];
      continue;
    }
    if(root1[i] != null)
    {
      result[i] = root1[i]
      continue;
    }
    if(root2[i] != null)
    {
      result[i] = root2[i]
      continue;
    }
    result[i] = null;
  }
  
  return result;
}
console.log(mergeArr([1], [2, 2]));
console.log(mergeArr([1,3,2,5], [2,1,3,null,4,null,7]));

