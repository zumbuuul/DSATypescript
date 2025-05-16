function removeElement(nums: number[], val: number): number {
    let k = nums.length
    for (let i = 0; i < k; i++) {
        if (i === nums.length - 1 && nums[nums.length - 1] === val)
            k--
        else if (nums[i] === val) {
            for (let j = i; j < k; j++) {
                nums[j] = nums[j + 1]
            }
            k--
            i--
        }
    }
    return k
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

