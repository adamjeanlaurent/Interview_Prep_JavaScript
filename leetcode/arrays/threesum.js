var threeSum = function(num) {
    let solution = [];
    num.sort((a,b) => a -b);

    for(let i = 0; i < num.length - 2; i++) {
        // This is a check if the ith number is a duplicate
        if(i == 0 || (i > 0 && num[i] != num[i-1])) {
            
            let left = i + 1;
            let right = num.length - 1;
            
            // calculating this sum with help us turn this into a two sum problem
            let sum = 0 - num[i];
            
            // while left and right don't cross
            while(left < right) {
                
                // if we have found a triplet
                if(num[left] + num[right] == sum) {
                    solution.push([num[i],num[left], num[right]]);
                    
                    // skip over all the duplicates
                    while(left < right && num[left] == num[left + 1]) left++;
                    while(left < right && num[right] == num[right - 1]) right--;
                    
                    // when we find a triplet, we move both left and right in
                    left++;
                    right--;
                }
                
                // if its greater move the right ptr back
                else if(num[left] + num[right] > sum) {
                    right--;
                }
                
                // if its smaller move the left ptr back
                else left++;
            }
        }
    }
    return solution;
}

/*
    - The solution here is to first sort the array
    - then, if i is not a duplicate, we essentially break it down into a two sum problem and create a sum which is 0 - the iTH number then we scan through the arr with two pointers left and right
    - if(left + right == sum) then we know that's a triplet
    - to ensure that we do not add triplets that are the same, after we add a triplet, we skip any adjacent duplicates
*/