(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{346:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"jz25-合并两个排序的链表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jz25-合并两个排序的链表"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://www.nowcoder.com/share/jump/9173034621689512225287",target:"_blank",rel:"noopener noreferrer"}},[s._v("JZ25 合并两个排序的链表"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("img",{attrs:{src:"https://uploadfiles.nowcoder.com/badge_images/20230716/917303462_1689512234944/WRJ9Rdu13I.png",alt:"图片"}})]),s._v(" "),t("h3",{attrs:{id:"迭代实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迭代实现"}},[s._v("#")]),s._v(" 迭代实现")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nc_tools"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * type ListNode struct{\n *   Val int\n *   Next *ListNode\n * }\n */")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可\n *\n *\n * @param pHead1 ListNode类\n * @param pHead2 ListNode类\n * @return ListNode类\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Merge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pHead1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pHead2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ListNode "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pHead1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" pHead2\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pHead2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" pHead1\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" head "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ListNode "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\tp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" head\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" pHead1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" pHead2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pHead1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" pHead2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Val "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\tp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead2\n\t\t\tp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next\n\t\t\tpHead2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\tp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead1\n\t\t\tp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next\n\t\t\tpHead1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pHead1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead1\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pHead2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead2\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br")])]),t("h3",{attrs:{id:"递归实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#递归实现"}},[s._v("#")]),s._v(" 递归实现")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nc_tools"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * type ListNode struct{\n *   Val int\n *   Next *ListNode\n * }\n */")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可\n *\n *\n * @param pHead1 ListNode类\n * @param pHead2 ListNode类\n * @return ListNode类\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Merge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pHead1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pHead2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ListNode "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pHead1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" pHead2\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pHead2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" pHead1\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pHead1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" pHead2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Val "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tpHead2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Merge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pHead1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pHead2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" pHead2\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tpHead1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Merge")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pHead1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pHead2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" pHead1\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("h2",{attrs:{id:"jz52-两个链表的第一个公共结点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jz52-两个链表的第一个公共结点"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://www.nowcoder.com/practice/6ab1d9a29e88450685099d45c9e31e46",target:"_blank",rel:"noopener noreferrer"}},[s._v("JZ52 两个链表的第一个公共结点"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("img",{attrs:{src:"https://uploadfiles.nowcoder.com/badge_images/20230717/917303462_1689559430215/p2YmKUKFQ8.png",alt:"图片"}})]),s._v(" "),t("p",[s._v("这题没做出来，看了"),t("a",{attrs:{href:"https://blog.nowcoder.net/n/35c57499566646e7b3ecb250d0b99907?f=comment",target:"_blank",rel:"noopener noreferrer"}},[s._v("大佬的题解"),t("OutboundLink")],1),s._v("和"),t("a",{attrs:{href:"https://blog.nowcoder.net/n/a0c6c80ab3134c20885a2a12e7b4282b?f=comment",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方的题解"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("使用 "),t("strong",[s._v("双指针解法")]),s._v("，让两个链表走相同的长度，相等的速度，当 "),t("code",[s._v("pHead1==pHead2")]),s._v(" 时就是结果，即使没有相同的公共节点，最后走完，两个都是 "),t("code",[s._v("nil")]),s._v(" 也是相等的，使两个链表一定等长让 "),t("code",[s._v("pHead1+pHead2==pHead2+pHead1")]),s._v(" 就好了，使用循环实现，下面这个是大佬分享的动态图，可以很清晰明了的明白。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn-static.xxcheng.cn/static/blog/images/2023/07/17/4603bbd95bd22702b78e93bde3b0d1e6.gif",alt:"36"}})]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nc_tools"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * type ListNode struct{\n *   Val int\n *   Next *ListNode\n * }\n */")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n *\n * @param pHead1 ListNode类\n * @param pHead2 ListNode类\n * @return ListNode类\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("FindFirstCommonNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pHead1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pHead2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ListNode "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\th1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" h2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" pHead1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pHead2\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" h1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" h2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" h1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\th1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead1\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\th1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" h1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" h2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\th2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pHead2\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\th2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" h2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Next\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" h1\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);