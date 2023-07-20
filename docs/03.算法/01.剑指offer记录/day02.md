---
title: day02
date: 2023-07-16 20:23:31
permalink: /pages/ee8d77/
categories:
  - 算法
  - 剑指offer记录
tags:
  - 
author: 
  name: xxcheng
  link: https://www.xxcheng.cn/
---
## [JZ25 合并两个排序的链表](https://www.nowcoder.com/share/jump/9173034621689512225287)

![图片](https://uploadfiles.nowcoder.com/badge_images/20230716/917303462_1689512234944/WRJ9Rdu13I.png)

### 迭代实现

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
 * @param pHead1 ListNode类
 * @param pHead2 ListNode类
 * @return ListNode类
 */
func Merge(pHead1 *ListNode, pHead2 *ListNode) *ListNode {
	if pHead1 == nil {
		return pHead2
	}
	if pHead2 == nil {
		return pHead1
	}
	var head *ListNode = &ListNode{}
	p := head
	for pHead1 != nil && pHead2 != nil {
		if pHead1.Val >= pHead2.Val {
			p.Next = pHead2
			p = p.Next
			pHead2 = pHead2.Next
		} else {
			p.Next = pHead1
			p = p.Next
			pHead1 = pHead1.Next
		}
	}
	if pHead1 != nil {
		p.Next = pHead1
	} else if pHead2 != nil {
		p.Next = pHead2
	}
	return head.Next
}

```

### 递归实现

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
 * @param pHead1 ListNode类
 * @param pHead2 ListNode类
 * @return ListNode类
 */
func Merge(pHead1 *ListNode, pHead2 *ListNode) *ListNode {
	if pHead1 == nil {
		return pHead2
	}
	if pHead2 == nil {
		return pHead1
	}
	if pHead1.Val >= pHead2.Val {
		pHead2.Next = Merge(pHead1, pHead2.Next)
		return pHead2
	} else {
		pHead1.Next = Merge(pHead1.Next, pHead2)
		return pHead1
	}
}

```

## [JZ52 两个链表的第一个公共结点](https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46)

![图片](https://uploadfiles.nowcoder.com/badge_images/20230717/917303462_1689559430215/p2YmKUKFQ8.png)

这题没做出来，看了[大佬的题解](https://blog.nowcoder.net/n/35c57499566646e7b3ecb250d0b99907?f=comment)和[官方的题解](https://blog.nowcoder.net/n/a0c6c80ab3134c20885a2a12e7b4282b?f=comment)

使用 **双指针解法**，让两个链表走相同的长度，相等的速度，当 `pHead1==pHead2` 时就是结果，即使没有相同的公共节点，最后走完，两个都是 `nil` 也是相等的，使两个链表一定等长让 `pHead1+pHead2==pHead2+pHead1` 就好了，使用循环实现，下面这个是大佬分享的动态图，可以很清晰明了的明白。

![36](https://cdn-static.xxcheng.cn/static/blog/images/2023/07/17/4603bbd95bd22702b78e93bde3b0d1e6.gif)

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
 *
 * @param pHead1 ListNode类
 * @param pHead2 ListNode类
 * @return ListNode类
 */
func FindFirstCommonNode(pHead1 *ListNode, pHead2 *ListNode) *ListNode {
	h1, h2 := pHead1, pHead2
	for h1 != h2 {
		if h1 == nil {
			h1 = pHead1
		} else {
			h1 = h1.Next
		}
		if h2 == nil {
			h2 = pHead2
		} else {
			h2 = h2.Next
		}
	}
	return h1
}

```