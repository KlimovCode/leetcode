// O(n)
var twoSum = function(nums, target) {
    const store = {}
    for(let i = 0; i < nums.length; i++){
      let cur = nums[i]
      let diff = target - cur
      // check exist needed value
      if(store[cur]!==undefined) return [store[cur], i]
      // Set value and index to store
      else store[diff] = i
    }
};
console.log(twoSum([2,1,4], 6))
