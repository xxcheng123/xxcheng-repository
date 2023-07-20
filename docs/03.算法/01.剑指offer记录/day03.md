---
title: day03
date: 2023-07-18 19:40:19
permalink: /pages/ad89ef/
categories:
  - 算法
  - 剑指offer记录
tags:
  - 
author: 
  name: xxcheng
  link: https://www.xxcheng.cn/
---
## [JZ23 链表中环的入口结点](https://nowcoder.com/practice/253d2c59ec3e4bc68da16833f79a38e4)

![图片](https://uploadfiles.nowcoder.com/badge_images/20230718/917303462_1689680452494/iZ3JNL8O30.png)

### 我的思路

遍历节点，根据题意节点值范围在 `1<=n<=10000` ，将遍历过的节点节点值取反，然后在循环过程中判断节点值是否为负，为负重新取正然后返回该节点。

```go
package main

/*
type ListNode struct {
	Val  int
	Next *ListNode
}
*/

func EntryNodeOfLoop(pHead *ListNode) *ListNode {
	p := pHead
	for p != nil {
		if p.Val < 1 {
			p.Val *= -1
			return p
		}
		p.Val *= -1
		p = p.Next
	}
	return nil
}

```

### 官方思路 - 快慢双指针

快指针走两步，慢指针走一步，在有环的情况下，两个指针一定会相遇，如果没有环，快指针先一步指向 `nil` ，直接退出循环即可。

假设头节点到环的入口节点距离为 `X`，慢指针走过的距离为 `X+Y`

那么快指针走过的距离就为 `2*(X+Y)`，快指针比慢指针多走了一圈，园的长度就为 `X+Y`

![image-20230718202656551](https://cdn-static.xxcheng.cn/static/blog/images/2023/07/18/48af110b56735a416dcc52a6fb0b7094.png)

画出示意图，可以推导出，相遇节点出发与从头节点一起出发，将会在环的入口节点相遇。

```go
package main

/*
type ListNode struct {
	Val  int
	Next *ListNode
}
*/

func EntryNodeOfLoop(pHead *ListNode) *ListNode {
	fast, slow := pHead, pHead
	for fast != nil && fast.Next != nil {
		fast = fast.Next.Next
		slow = slow.Next
		if fast == slow {
			break
		}
	}
	if fast == nil || fast.Next == nil {
		return nil
	}

	slow = pHead
	for fast != slow {
		slow = slow.Next
		fast = fast.Next
	}
	return fast
}
```

## [JZ22 链表中倒数最后k个结点](https://www.nowcoder.com/practice/886370fe658f41b498d40fb34ae76ff9)

![图片](https://uploadfiles.nowcoder.com/badge_images/20230718/917303462_1689683501315/E4vy53sSNy.png)

### 我的思路

执行两次循环，一次取长度，一次获取指定指针

```go
package main
import . "nc_tools"
/*
 * type ListNode struct{
 *   Val int
 *   Next *ListNode
 * }
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
*/
func FindKthToTail(pHead *ListNode, k int) *ListNode {
	p := pHead
	len := 0
	for p != nil {
		len++
		p = p.Next
	}
	if k > len {
		return nil
	}
	i := 0
	p = pHead
	for i != len-k {
		i++
		p = p.Next
	}
	return p
}
```

### 官方思路 -  快慢双指针

让快指针先移动 `k` 步，两个指针距离是 `k`，然后再然后一起移动，当快指针到达终点，此时慢所在位置就是倒数 `k` 个位置

```go
package main
import . "nc_tools"
/*
 * type ListNode struct{
 *   Val int
 *   Next *ListNode
 * }
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
*/
func FindKthToTail(pHead *ListNode, k int) *ListNode {
	fast, slow := pHead, pHead
	i := 0
	for i < k && fast != nil {
		i++
		fast = fast.Next
	}
	if i != k {
		return nil
	}
	for fast != nil {
		fast = fast.Next
		slow = slow.Next
	}
	return slow
}
```