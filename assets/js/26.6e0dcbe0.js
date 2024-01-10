(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{340:function(s,a,n){"use strict";n.r(a);var e=n(7),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"排序-order-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序-order-by"}},[s._v("#")]),s._v(" 排序 "),a("code",[s._v("ORDER BY")])]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("ORDER BY")]),s._v(" 语句，写在 "),a("code",[s._v("WHERE")]),s._v(" 句子之后，默认升序排序")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT last_name,salary FROM employees ORDER BY salary;\n+-------------+----------+\n| last_name   | salary   |\n+-------------+----------+\n| Olson       |  2100.00 |\n| Markle      |  2200.00 |\n| Philtanker  |  2200.00 |\n-- ... ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("code",[s._v("ORDER BY")]),s._v(" 可以使用之前学习过的列的别名，而 "),a("code",[s._v("WHERE")]),s._v(" 中无法使用列的别名，因为 "),a("code",[s._v("WHERE")]),s._v(" 早于 "),a("code",[s._v("SELECT")]),s._v(" 处理。")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT last_name,salary*12 annual_salary FROM employees ORDER BY annual_salary;\n+-------------+---------------+\n| last_name   | annual_salary |\n+-------------+---------------+\n| Olson       |      25200.00 |\n| Markle      |      26400.00 |\n| Philtanker  |      26400.00 |\n| Landry      |      28800.00 |\n| Gee         |      28800.00 |\n| Colmenares  |      30000.00 |\n-- ... ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"排序规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序规则"}},[s._v("#")]),s._v(" 排序规则")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("ASC")]),s._v(" 升序排序 默认")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT last_name,salary FROM employees ORDER BY salary ASC;\n+-------------+----------+\n| last_name   | salary   |\n+-------------+----------+\n| Olson       |  2100.00 |\n| Markle      |  2200.00 |\n| Philtanker  |  2200.00 |\n| Landry      |  2400.00 |\n| Gee         |  2400.00 |\n| Colmenares  |  2500.00 |\n-- ... ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("DESC")]),s._v(" 降序排序")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT last_name,salary FROM employees ORDER BY salary DESC;\n+-------------+----------+\n| last_name   | salary   |\n+-------------+----------+\n| King        | 24000.00 |\n| Kochhar     | 17000.00 |\n| De Haan     | 17000.00 |\n| Russell     | 14000.00 |\n| Partners    | 13500.00 |\n| Hartstein   | 13000.00 |\n| Greenberg   | 12000.00 |\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"多列排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多列排序"}},[s._v("#")]),s._v(" 多列排序")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ORDER BY\n-- 一级排序\ncol_name ASC,\n-- 二级排序\ncol_name_2 DESC,\n-- 三级排序\ncol_name_3 ASC,\n-- ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT last_name,salary,department_id FROM employees ORDER BY salary DESC,department_id ASC;\n+-------------+----------+---------------+\n| last_name   | salary   | department_id |\n+-------------+----------+---------------+\n| King        | 24000.00 |            90 |\n| Kochhar     | 17000.00 |            90 |\n| De Haan     | 17000.00 |            90 |\n| Russell     | 14000.00 |            80 |\n| Partners    | 13500.00 |            80 |\n| Hartstein   | 13000.00 |            20 |\n| Errazuriz   | 12000.00 |            80 |\n| Greenberg   | 12000.00 |           100 |\n-- ... ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"分页-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页-limit"}},[s._v("#")]),s._v(" 分页 "),a("code",[s._v("LIMIT")])]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("LIMIT")]),s._v(" 语句实现，写在 "),a("code",[s._v("ORDER BY")]),s._v(" 之后")]),s._v(" "),a("p",[a("strong",[s._v("格式："),a("code",[s._v("LIMIT 偏移量,数据条目数")])])]),s._v(" "),a("p",[s._v("当偏移量为0时，可以省略："),a("code",[s._v("LIMIT 条目数")])]),s._v(" "),a("p",[a("code",[s._v("MySQL8.0")]),s._v(" 增加了一个新的特性，可以使用 "),a("code",[s._v("OFFSET")]),s._v(" 来代替偏移量")]),s._v(" "),a("p",[a("code",[s._v("LIMIT 数据条目数 OFFSET 偏移量")])]),s._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("h4",{attrs:{id:"取第1-5条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取第1-5条"}},[s._v("#")]),s._v(" 取第1~5条")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT last_name,salary,department_id FROM employees ORDER BY salary DESC,department_id ASC LIMIT 0,5;\n+-----------+----------+---------------+\n| last_name | salary   | department_id |\n+-----------+----------+---------------+\n| King      | 24000.00 |            90 |\n| Kochhar   | 17000.00 |            90 |\n| De Haan   | 17000.00 |            90 |\n| Russell   | 14000.00 |            80 |\n| Partners  | 13500.00 |            80 |\n+-----------+----------+---------------+\n5 rows in set (0.00 sec)\n\nmysql> SELECT last_name,salary,department_id FROM employees ORDER BY salary DESC,department_id ASC LIMIT 5;\n+-----------+----------+---------------+\n| last_name | salary   | department_id |\n+-----------+----------+---------------+\n| King      | 24000.00 |            90 |\n| Kochhar   | 17000.00 |            90 |\n| De Haan   | 17000.00 |            90 |\n| Russell   | 14000.00 |            80 |\n| Partners  | 13500.00 |            80 |\n+-----------+----------+---------------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h4",{attrs:{id:"取第4-8条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取第4-8条"}},[s._v("#")]),s._v(" 取第4~8条")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT last_name,salary,department_id FROM employees ORDER BY salary DESC,department_id ASC LIMIT 3,5;\n+-----------+----------+---------------+\n| last_name | salary   | department_id |\n+-----------+----------+---------------+\n| Russell   | 14000.00 |            80 |\n| Partners  | 13500.00 |            80 |\n| Hartstein | 13000.00 |            20 |\n| Errazuriz | 12000.00 |            80 |\n| Greenberg | 12000.00 |           100 |\n+-----------+----------+---------------+\n5 rows in set (0.00 sec)\n\nmysql> SELECT last_name,salary,department_id FROM employees ORDER BY salary DESC,department_id ASC LIMIT 5 OFFSET 3;\n+-----------+----------+---------------+\n| last_name | salary   | department_id |\n+-----------+----------+---------------+\n| Russell   | 14000.00 |            80 |\n| Partners  | 13500.00 |            80 |\n| Hartstein | 13000.00 |            20 |\n| Errazuriz | 12000.00 |            80 |\n| Greenberg | 12000.00 |           100 |\n+-----------+----------+---------------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h4",{attrs:{id:"取第6-10条和第11-15条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取第6-10条和第11-15条"}},[s._v("#")]),s._v(" 取第6~10条和第11~15条")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT last_name,salary,department_id FROM employees ORDER BY salary DESC,department_id ASC LIMIT 5,5;\n+-----------+----------+---------------+\n| last_name | salary   | department_id |\n+-----------+----------+---------------+\n| Hartstein | 13000.00 |            20 |\n| Errazuriz | 12000.00 |            80 |\n| Greenberg | 12000.00 |           100 |\n| Higgins   | 12000.00 |           110 |\n| Ozer      | 11500.00 |            80 |\n+-----------+----------+---------------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT last_name,salary,department_id FROM employees ORDER BY salary DESC,department_id ASC LIMIT 10,5;\n+-----------+----------+---------------+\n| last_name | salary   | department_id |\n+-----------+----------+---------------+\n| Raphaely  | 11000.00 |            30 |\n| Cambrault | 11000.00 |            80 |\n| Abel      | 11000.00 |            80 |\n| Vishney   | 10500.00 |            80 |\n| Zlotkey   | 10500.00 |            80 |\n+-----------+----------+---------------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("通过示例，可以推导出一个公式：")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("LIMIT (pageNo-1)*pageSize,pageSize;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"不同-dbms-实现分页之间的差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同-dbms-实现分页之间的差异"}},[s._v("#")]),s._v(" 不同 "),a("code",[s._v("DBMS")]),s._v(" 实现分页之间的差异")]),s._v(" "),a("p",[s._v("在不同的 "),a("code",[s._v("DBMS")]),s._v(" 之间它们实现的关键字和方法是不同的。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("MySQL")]),s._v("、"),a("code",[s._v("PostgreSQL")]),s._v("、"),a("code",[s._v("MariaDB")]),s._v("、"),a("code",[s._v("SQLite")]),s._v(" 使用 "),a("code",[s._v("LIMIT")]),s._v(" 关键字；")]),s._v(" "),a("li",[a("code",[s._v("SQL Server")]),s._v("、"),a("code",[s._v("Access")]),s._v(" 使用 "),a("code",[s._v("TOP")]),s._v(" 关键字；")]),s._v(" "),a("li",[s._v("...")])]),s._v(" "),a("h2",{attrs:{id:"练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[s._v("#")]),s._v(" 练习")]),s._v(" "),a("h3",{attrs:{id:"查询员工的姓名和部门号和年薪-按年薪降序-按姓名升序显示-取前5位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询员工的姓名和部门号和年薪-按年薪降序-按姓名升序显示-取前5位"}},[s._v("#")]),s._v(" 查询员工的姓名和部门号和年薪，按年薪降序，按姓名升序显示（取前5位）")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT first_name,last_name,department_id,salary*12 as salary_annual\n    -> FROM employees\n    -> ORDER BY salary_annual DESC,\n    -> first_name ASC\n    -> LIMIT 5;\n+------------+-----------+---------------+---------------+\n| first_name | last_name | department_id | salary_annual |\n+------------+-----------+---------------+---------------+\n| Steven     | King      |            90 |     288000.00 |\n| Lex        | De Haan   |            90 |     204000.00 |\n| Neena      | Kochhar   |            90 |     204000.00 |\n| John       | Russell   |            80 |     168000.00 |\n| Karen      | Partners  |            80 |     162000.00 |\n+------------+-----------+---------------+---------------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"选择工资不在-8000-到-17000-的员工的姓名和工资-按工资降序-显示第21到25位置的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择工资不在-8000-到-17000-的员工的姓名和工资-按工资降序-显示第21到25位置的数据"}},[s._v("#")]),s._v(" 选择工资不在 8000 到 17000 的员工的姓名和工资，按工资降序，显示第21到25位置的数据")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT last_name,salary\n    -> FROM employees\n    -> WHERE salary NOT BETWEEN 8000 AND 17000\n    -> ORDER BY salary DESC\n    -> LIMIT 20,5;\n+-----------+---------+\n| last_name | salary  |\n+-----------+---------+\n| Ernst     | 6000.00 |\n| Fay       | 6000.00 |\n| Mourgos   | 5800.00 |\n| Austin    | 4800.00 |\n| Pataballa | 4800.00 |\n+-----------+---------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"查询邮箱中包含-e-的员工信息-并先按邮箱的字节数降序-再按部门号升序-取前5位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询邮箱中包含-e-的员工信息-并先按邮箱的字节数降序-再按部门号升序-取前5位"}},[s._v("#")]),s._v(" 查询邮箱中包含 e 的员工信息，并先按邮箱的字节数降序，再按部门号升序（取前5位）")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT department_id,last_name,email FROM employees\n    -> WHERE email LIKE '%e%'\n    -> -- WHERE email REGEXP 'e'\n    -> ORDER BY LENGTH(email) DESC,\n    -> department_id ASC\n    -> LIMIT 5;\n+---------------+------------+----------+\n| department_id | last_name  | email    |\n+---------------+------------+----------+\n|            20 | Hartstein  | MHARTSTE |\n|            30 | Colmenares | KCOLMENA |\n|            30 | Raphaely   | DRAPHEAL |\n|            50 | Everett    | BEVERETT |\n|            50 | Dellinger  | JDELLING |\n+---------------+------------+----------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);