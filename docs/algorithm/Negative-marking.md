---
title: Negative Marking
last_modified: 2020-05-30T15:54:15+02:00
---

### Algorithm

1. Iterate over the array, evaluating each element (let's call the current element curcur).

2. Since we use negative marking, we must ensure that the current element (curcur) is positive (i.e. if curcur is negative, then use its absolute value).

3. Check if nums[cur]nums[cur] is negative.

    - If it is, then we have already performed this operation for the same number, and hence curcur is the duplicate number. Store curcur as the duplicate and exit the loop.

    - Otherwise, flip the sign of nums[cur]nums[cur] (i.e. make it negative). Move to the next element and repeat step 3.

4. Once we've identified the duplicate, we could just return the duplicate number. However, even though we were not able to meet the problem constraints, we can show that we are mindful of the constraints by restoring the array. This is done by changing all negative numbers to positive.

### List of leetcode questions

1. First Missing Positive
2. Find All Duplicates in an Array
3. Find the Duplicate Number
4. Array Nesting
5. Find All Numbers Disappeared in an Array