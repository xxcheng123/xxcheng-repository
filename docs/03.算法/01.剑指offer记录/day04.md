---
title: day04
date: 2023-07-19 20:24:00
permalink: /pages/5fda18/
categories:
  - 算法
  - 剑指offer记录
tags:
  - 
author: 
  name: xxcheng
  link: https://www.xxcheng.cn/
---
## [JZ35 复杂链表的复制](https://www.nowcoder.com/practice/f836b2c43afc4b35ad6adc41ec941dba)

![图片](https://uploadfiles.nowcoder.com/badge_images/20230719/917303462_1689769528846/7m49DpenwF.png)

刚开始我的思路是从头节点开始遍历，遍历过程中新建一个新的节点，如果原节点有 `Random` 指针，那么就新节点的 `Random` 指向原节点的 `Random`。然后原节点的 `Next` 指向新节点。

![image-20230720073436722](https://cdn-static.xxcheng.cn/static/blog/images/2023/07/20/e6ee9f388b42f948f975195a5ec56c53.png)

然后在遍历一遍新链表，如果节点存在 `Random` 指针，则使将 `Random` 指针重新指向原 `Random` 的 `Next` 就是新节点，`p.Random=p.Random.Next`。

```go
type RandomListNode struct {
	Label  int
	Next   *RandomListNode
	Random *RandomListNode
}

func Clone(head *RandomListNode) *RandomListNode {
	if head == nil {
		return nil
	}
	p := head
	prev_p := &RandomListNode{0, nil, nil}
	head = prev_p
	var cur_p *RandomListNode
	for p != nil {
		cur_p = &RandomListNode{p.Label, nil, nil}
		if p.Random != nil {
			cur_p.Random = p.Random
		}
		prev_p.Next = cur_p
		prev_p = cur_p
		cur_p = p
		p = p.Next
		cur_p.Next = prev_p
	}
	p = head.Next
	for p != nil {
		if p.Random != nil {
			p.Random = p.Random.Next
		}
		p = p.Next
	}
	return head.Next
}
```

代码我在本地指向测试是通过的，但是始终无法通过测评。提示 `wrong,cannot used original node of list`。

```go
func main() {
	p0 := RandomListNode{1, nil, nil}
	p1 := RandomListNode{2, nil, nil}
	p2 := RandomListNode{3, nil, nil}
	p3 := RandomListNode{4, nil, nil}
	p4 := RandomListNode{5, nil, nil}
	p0.Next = &p1
	p1.Next = &p2
	p2.Next = &p3
	p3.Next = &p4

	p0.Random = &p2
	p1.Random = &p4
	p3.Random = &p1
	res := &p0
	fmt.Println("original")
	for res != nil {
		fmt.Printf("%p,val:%v,next:%p,rand:%p\n", res, res.Label, res.Next, res.Random)
		res = res.Next
	}
	fmt.Println("-----")
	res = Clone(&p0)
	fmt.Println("new list")
	for res != nil {
		fmt.Printf("%p,val:%v,next:%p,rand:%p\n", res, res.Label, res.Next, res.Random)
		res = res.Next
	}
	fmt.Println("-----")
	res = &p0
	fmt.Println("old list")
	for res != nil {
		fmt.Printf("%p,val:%v,next:%p,rand:%p\n", res, res.Label, res.Next, res.Random)
		res = res.Next
	}
}
```

```shell
[root@CentOS code-alg]# go run main.go
original
0xc000010030,val:1,next:0xc000010048,rand:0xc000010060
0xc000010048,val:2,next:0xc000010060,rand:0xc000010090
0xc000010060,val:3,next:0xc000010078,rand:0x0
0xc000010078,val:4,next:0xc000010090,rand:0xc000010048
0xc000010090,val:5,next:0x0,rand:0x0
-----
new list
0xc0000100c0,val:1,next:0xc0000100d8,rand:0xc0000100f0
0xc0000100d8,val:2,next:0xc0000100f0,rand:0xc000010120
0xc0000100f0,val:3,next:0xc000010108,rand:0x0
0xc000010108,val:4,next:0xc000010120,rand:0xc0000100d8
0xc000010120,val:5,next:0x0,rand:0x0
-----
old list
0xc000010030,val:1,next:0xc0000100c0,rand:0xc000010060
0xc0000100c0,val:1,next:0xc0000100d8,rand:0xc0000100f0
0xc0000100d8,val:2,next:0xc0000100f0,rand:0xc000010120
0xc0000100f0,val:3,next:0xc000010108,rand:0x0
0xc000010108,val:4,next:0xc000010120,rand:0xc0000100d8
0xc000010120,val:5,next:0x0,rand:0x0
[root@CentOS code-alg]# 
```

绞尽脑汁尝试了好久，重新阅读题目，其中 `（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）` 我也是符合的。实在没有办法，我看了题解然后对比我的，思路上有些相似，通过原链表指向新链表获取新链表的 `Random`，但是题解的代码对于原链表中的节点最后都会恢复原样，而我的代码的的原链表的节点的 `Next` 指针是改变的，指向新的节点。于是我就尝试在最后的时候把原链表的 `Next` 恢复，果然测评通过。

```go
package main

/*
type RandomListNode struct {
    Label int
    Next *RandomListNode
    Random *RandomListNode
}
*/

/**
 *
 * @param pHead RandomListNode类
 * @return RandomListNode类
 */
func Clone(head *RandomListNode) *RandomListNode {
	if head == nil {
		return nil
	}
	p := head
    oldH:=[]*RandomListNode{}
	prev_p := &RandomListNode{0, nil, nil}
	head = prev_p
	var cur_p *RandomListNode
	for p != nil {
		cur_p = &RandomListNode{p.Label, nil, nil}
		if p.Random != nil {
			cur_p.Random = p.Random
		}
        oldH=append(oldH,p)
		prev_p.Next = cur_p
		prev_p = cur_p
		cur_p = p
		p = p.Next
		cur_p.Next = prev_p
	}
	p = head.Next
	for p != nil {
		if p.Random != nil {
			p.Random = p.Random.Next
		}
		p = p.Next
	}
    oldH=append(oldH, nil)
    for i:=0;i<len(oldH)-1;i++{
        oldH[i].Next=oldH[i+1]
    }
	return head.Next
}
```

看来，我的代码是行不通的，对旧链表的破坏是无法修改的，上面测评通过的是拿一个切片存储原链表每个节点的地址值然后最后重新指向实现的。

```go
package main


/*
type RandomListNode struct {
    Label int
    Next *RandomListNode
    Random *RandomListNode
}
*/

/**
 *
 * @param pHead RandomListNode类
 * @return RandomListNode类
 */
func Clone(head *RandomListNode) *RandomListNode {
	if head == nil {
		return nil
	}
	p := head
	for p != nil {
		new_node := &RandomListNode{p.Label, p.Next, nil}
		p.Next = new_node
		p = p.Next.Next
	}
	p = head
	new_head := head.Next
	// 获取新链表
	for p != nil {
		if p.Random != nil {
			// 1->1(new).Random=1->3->3(new)
			p.Next.Random = p.Random.Next
		}
		p = p.Next.Next
	}
	// 拆分两个链表
	p = head
	old_prev, new_prev := new(RandomListNode), new(RandomListNode)
	for p != nil {
		old_prev.Next = p
		new_prev.Next = p.Next
		old_prev = p
		new_prev = p.Next
		p = p.Next.Next
	}
	old_prev.Next = nil
	return new_head
}
```

在使用官方题解思路的时候，还遇到两个问题。

- 赋值新链表的 `Random` 操作不能和拆分链表一起进行，否则会导致拆分时 `Next` 指向错误；
- 原链表的最后一个 `Next` 要记得手动指向 `nil`