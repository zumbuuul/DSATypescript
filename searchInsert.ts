function searchInsert(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1
    while (right >= left) {
        if (nums[Math.floor((right + left) / 2)] > target) right = Math.floor((right + left) / 2) - 1
        else if (nums[Math.floor((right + left) / 2)] < target) left = Math.floor((right + left) / 2) + 1
        else return Math.floor((right + left) / 2)
    }
    if (target < nums[0])
        return left
    if (target > nums[nums.length - 1])
        return right + 1

    return right + 1
}

console.log(searchInsert([1, 3, 5, 6], 4))