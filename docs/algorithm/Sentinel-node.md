---
title: Sentinel Node
last_modified: 2020-05-30T15:54:15+02:00
---

The standard way to handle this use case is to use the so-called Sentinel Node. Sentinel nodes are widely used for trees and linked lists as pseudo-heads, pseudo-tails, etc. They are purely functional and usually don't hold any data. Their primary purpose is to standardize the situation to avoid edge case handling.

For example, let's use here pseudo-head with zero value to ensure that the situation "delete the list head" could never happen, and all nodes to delete are "inside" the list.

### Referenced links

https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

https://en.wikipedia.org/wiki/Sentinel_node