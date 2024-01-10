(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{341:function(s,a,n){"use strict";n.r(a);var e=n(7),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"聚合函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合函数"}},[s._v("#")]),s._v(" 聚合函数")]),s._v(" "),a("p",[s._v("作用于一组函数，只返回一个值。")]),s._v(" "),a("h2",{attrs:{id:"常见的聚合函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的聚合函数"}},[s._v("#")]),s._v(" 常见的聚合函数")]),s._v(" "),a("h3",{attrs:{id:"avg、sum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avg、sum"}},[s._v("#")]),s._v(" "),a("code",[s._v("AVG")]),s._v("、"),a("code",[s._v("SUM")])]),s._v(" "),a("p",[s._v("只适合数值类型的字段")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT\nAVG(salary),SUM(salary),SUM(last_name)\nFROM employees;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-------------+-------------+----------------+\n| AVG(salary) | SUM(salary) | SUM(last_name) |\n+-------------+-------------+----------------+\n| 6461.682243 |      691400 |              0 |\n+-------------+-------------+----------------+\n1 row in set, 107 warnings (0.0012 sec)\nWarning (code 1292): Truncated incorrect DOUBLE value: 'King'\nWarning (code 1292): Truncated incorrect DOUBLE value: 'Kochhar'\nWarning (code 1292): Truncated incorrect DOUBLE value: 'De Haan'\n-- ... ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"max、min"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max、min"}},[s._v("#")]),s._v(" "),a("code",[s._v("MAX")]),s._v("、"),a("code",[s._v("MIN")])]),s._v(" "),a("p",[s._v("可以任何数据类型的字段。")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT\nMAX(salary),MIN(salary),MIN(last_name)\nFROM employees;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-------------+-------------+----------------+\n| MAX(salary) | MIN(salary) | MIN(last_name) |\n+-------------+-------------+----------------+\n|       24000 |        2100 | Abel           |\n+-------------+-------------+----------------+\n1 row in set (0.0007 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"count"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#count"}},[s._v("#")]),s._v(" "),a("code",[s._v("COUNT")])]),s._v(" "),a("p",[s._v("计算记录总数，支持任何数据类型，会忽略 "),a("code",[s._v("NULL")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT\nCOUNT(*),COUNT(1),COUNT(department_id)\nFROM employees;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+----------+----------+----------------------+\n| COUNT(*) | COUNT(1) | COUNT(department_id) |\n+----------+----------+----------------------+\n|      107 |      107 |                  106 |\n+----------+----------+----------------------+\n1 row in set (0.0012 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("AVG = SUM / COUNT")]),s._v(" "),a("h2",{attrs:{id:"group-by"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#group-by"}},[s._v("#")]),s._v(" "),a("code",[s._v("GROUP BY")])]),s._v(" "),a("p",[s._v("结合"),a("strong",[s._v("聚合函数")]),s._v("一起使用，对结果集进行分组，声明在 "),a("code",[s._v("FROM")]),s._v(" 之后，"),a("code",[s._v("ORDER BY")]),s._v("、"),a("code",[s._v("LIMIT")]),s._v(" 之前，"),a("code",[s._v("SELECT")]),s._v(" 中"),a("strong",[s._v("非聚合函数")]),s._v("的字段必须出现在 "),a("code",[s._v("GROUP BY")]),s._v(" 中。")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT department_id,AVG(salary) avg_salary\nFROM employees\nGROUP BY department_id\nORDER BY avg_salary ASC\nLIMIT 5;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+---------------+-------------+\n| department_id | avg_salary  |\n+---------------+-------------+\n|            50 | 3475.555556 |\n|            30 |        4150 |\n|            10 |        4400 |\n|            60 |        5760 |\n|            40 |        6500 |\n+---------------+-------------+\n5 rows in set (0.0010 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"with-rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-rollup"}},[s._v("#")]),s._v(" "),a("code",[s._v("WITH ROLLUP")])]),s._v(" "),a("p",[a("code",[s._v("WITH ROLLUP")]),s._v(" 是 "),a("code",[s._v("GROUP BY")]),s._v(" 子句的拓展，在分组的基础上再做一个统计。")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT \ndepartment_id,\nAVG(salary) avg_salary,\nSUM(salary) sum_salary\nFROM employees\nGROUP BY department_id\nWITH ROLLUP;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+---------------+--------------+------------+\n| department_id | avg_salary   | sum_salary |\n+---------------+--------------+------------+\n|          NULL |         7000 |       7000 |\n|            10 |         4400 |       4400 |\n|            20 |         9500 |      19000 |\n|            30 |         4150 |      24900 |\n|            40 |         6500 |       6500 |\n|            50 |  3475.555556 |     156400 |\n|            60 |         5760 |      28800 |\n|            70 |        10000 |      10000 |\n|            80 |  8955.882353 |     304500 |\n|            90 | 19333.333333 |      58000 |\n|           100 |         8600 |      51600 |\n|           110 |        10150 |      20300 |\n|          NULL |  6461.682243 |     691400 |\n+---------------+--------------+------------+\n13 rows in set (0.0010 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[a("strong",[s._v("5.7版本及之前 "),a("code",[s._v("WITH ROLLUP")]),s._v(" 与 "),a("code",[s._v("ORDER BY")]),s._v(" 一起使用会报错，8.0 版本不会。")])]),s._v(" "),a("p",[a("em",[s._v("5.7 版本")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT\n    -> department_id,\n    -> AVG(salary) avg_salary,\n    -> SUM(salary) sum_salary\n    -> FROM employees\n    -> GROUP BY department_id\n    -> WITH ROLLUP\n    -> ORDER BY avg_salary;\nERROR 1221 (HY000): Incorrect usage of CUBE/ROLLUP and ORDER BY\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("em",[s._v("8.0 版本")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SQL > SELECT\n\t-> department_id,\n\t-> AVG(salary) avg_salary,\n\t-> SUM(salary) sum_salary\n\t-> FROM employees\n\t-> GROUP BY department_id\n\t-> WITH ROLLUP\n\t-> ORDER BY avg_salary;\n+---------------+--------------+------------+\n| department_id | avg_salary   | sum_salary |\n+---------------+--------------+------------+\n|            50 |  3475.555556 |     156400 |\n|            30 |         4150 |      24900 |\n|            10 |         4400 |       4400 |\n|            60 |         5760 |      28800 |\n|          NULL |  6461.682243 |     691400 |\n|            40 |         6500 |       6500 |\n|          NULL |         7000 |       7000 |\n|           100 |         8600 |      51600 |\n|            80 |  8955.882353 |     304500 |\n|            20 |         9500 |      19000 |\n|            70 |        10000 |      10000 |\n|           110 |        10150 |      20300 |\n|            90 | 19333.333333 |      58000 |\n+---------------+--------------+------------+\n13 rows in set (0.0012 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("h2",{attrs:{id:"having"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#having"}},[s._v("#")]),s._v(" "),a("code",[s._v("HAVING")])]),s._v(" "),a("p",[s._v("用于过滤分组的子句，必须在 "),a("code",[s._v("GROUP BY")]),s._v(" 后面，开发中使用 "),a("code",[s._v("HAVING")]),s._v(" 的前提是使用了 "),a("code",[s._v("GROUP BY")]),s._v("，否则没有意义。"),a("strong",[s._v("过滤条件中有聚合函数使用 "),a("code",[s._v("HAVING")]),s._v(" 子句，没有聚合函数从优化角度使用 "),a("code",[s._v("WHERE")]),s._v(" 子句。")])]),s._v(" "),a("p",[a("em",[s._v("部门中最高工资大于10000的部门")])]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT\ndepartment_id,MAX(salary)\nFROM employees\nGROUP BY department_id\nHAVING MAX(salary)>10000;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+---------------+-------------+\n| department_id | MAX(salary) |\n+---------------+-------------+\n|            20 |       13000 |\n|            30 |       11000 |\n|            80 |       14000 |\n|            90 |       24000 |\n|           100 |       12000 |\n|           110 |       12000 |\n+---------------+-------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"初学底层-sql-执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初学底层-sql-执行"}},[s._v("#")]),s._v(" 初学底层 "),a("code",[s._v("SQL")]),s._v(" 执行")]),s._v(" "),a("h3",{attrs:{id:"声明顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明顺序"}},[s._v("#")]),s._v(" 声明顺序")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("SELECT...")])]),s._v(" "),a("li",[a("code",[s._v("DISTINCT...")])]),s._v(" "),a("li",[a("code",[s._v("FROM...")])]),s._v(" "),a("li",[a("code",[s._v("JOIN...ON...")])]),s._v(" "),a("li",[a("code",[s._v("WHERE...")])]),s._v(" "),a("li",[a("code",[s._v("GROUP BY...")])]),s._v(" "),a("li",[a("code",[s._v("WITH ROLLUP")])]),s._v(" "),a("li",[a("code",[s._v("HAVING...")])]),s._v(" "),a("li",[a("code",[s._v("ORDER BY...")])]),s._v(" "),a("li",[a("code",[s._v("LIMIT")])])]),s._v(" "),a("h3",{attrs:{id:"执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行顺序"}},[s._v("#")]),s._v(" 执行顺序")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("FROM...")])]),s._v(" "),a("li",[a("code",[s._v("JOIN...ON...")])]),s._v(" "),a("li",[a("code",[s._v("WHERE...")])]),s._v(" "),a("li",[a("code",[s._v("GROUP BY...")])]),s._v(" "),a("li",[a("code",[s._v("WITH ROLLUP")])]),s._v(" "),a("li",[a("code",[s._v("HAVING")])]),s._v(" "),a("li",[a("code",[s._v("SELECT")])]),s._v(" "),a("li",[a("code",[s._v("DISTINCT")])]),s._v(" "),a("li",[a("code",[s._v("ORDER BY")])]),s._v(" "),a("li",[a("code",[s._v("LIMIT")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);