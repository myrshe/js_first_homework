function deleteDublicate(nums) {
    const uniqSet = new Set(nums);
    const uniqArray = Array.from(uniqSet);
    const k = uniqArray.length;

    nums.splice(0, nums.length, ...uniqArray);
    return k;
}


array1 = [1,1,2];
console.log(deleteDublicate(array1));
console.log(array1);
