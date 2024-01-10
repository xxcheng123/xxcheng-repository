(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{345:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一、数据库操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、数据库操作"}},[s._v("#")]),s._v(" 一、数据库操作")]),s._v(" "),n("h3",{attrs:{id:"创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[s._v("#")]),s._v(" 创建")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("CREATE DATABASE 库名;")])]),s._v(" "),n("li",[n("code",[s._v("CREATE DATABASE 库名 CHARACTER SET 字符集;")])]),s._v(" "),n("li",[n("code",[s._v("CREATE DATABASE IF NOT EXISTS 库名;")])])]),s._v(" "),n("h3",{attrs:{id:"查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询"}},[s._v("#")]),s._v(" 查询")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("SHOW DATABASES;")])]),s._v(" "),n("p",[s._v("查看所有数据库")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("USE 库名;")])]),s._v(" "),n("p",[s._v("切换要操作数据库")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("SHOW DATABASES;")])]),s._v(" "),n("p",[s._v("查询当前数据库所有的表")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("SELECT DATABASE();")])]),s._v(" "),n("p",[s._v("查询当前操作的数据库的库名")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("SHOW TABLES FROM 库名;")])]),s._v(" "),n("p",[s._v("查询指定数据库有哪些数据表")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("SHOW CREATE DATABASE 库名;")])]),s._v(" "),n("p",[s._v("查询创建数据库时的命令包括默认")])])]),s._v(" "),n("h3",{attrs:{id:"修改"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[s._v("#")]),s._v(" 修改")]),s._v(" "),n("p",[n("em",[s._v("不支持修改数据库名操作")])]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("ALTER DATABASE 库名 CHARACTER SET 字符集;")])]),s._v(" "),n("p",[s._v("修改数据库的字符集")])])]),s._v(" "),n("h3",{attrs:{id:"删除"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[s._v("#")]),s._v(" 删除")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("DROP DATABASE 库名;")])]),s._v(" "),n("li",[n("code",[s._v("DROP DATABASE IF EXISTS 库名;")])])]),s._v(" "),n("h2",{attrs:{id:"二、数据表操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、数据表操作"}},[s._v("#")]),s._v(" 二、数据表操作")]),s._v(" "),n("h3",{attrs:{id:"创建-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-2"}},[s._v("#")]),s._v(" 创建")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("初始创建")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("CREATE TABLE 表名(\n\t字段名 字段类型,\n    ... ...\n);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("不存在再初始创建")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("CREATE TABLE IS NOT EXIST 表名(\n\t字段名 字段类型,\n    ... ...\n);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("基于现有表创建")])]),s._v(" "),n("p",[s._v("根据查询语句的结果创建新的表，新表会创建字段和数据。")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("CREATE TABLE 表名 AS 查询语句;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("em",[s._v("从 "),n("code",[s._v("departments")]),s._v(" 创建新表")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SQL > DESC departments;\n+-----------------+-------------+------+-----+---------+-------+\n| Field           | Type        | Null | Key | Default | Extra |\n+-----------------+-------------+------+-----+---------+-------+\n| department_id   | int         | NO   | PRI | 0       |       |\n| department_name | varchar(30) | NO   |     | NULL    |       |\n| manager_id      | int         | YES  | MUL | NULL    |       |\n| location_id     | int         | YES  | MUL | NULL    |       |\n+-----------------+-------------+------+-----+---------+-------+\n\nSQL -> CREATE TABLE IF NOT EXISTS departments2 AS\n\t-> SELECT department_id id,department_name name,manager_id\n\t-> FROM departments;\nQuery OK, 27 rows affected (0.0380 sec)\n\nRecords: 27  Duplicates: 0  Warnings: 0\n\nSQL > DESC departments2;\n+------------+-------------+------+-----+---------+-------+\n| Field      | Type        | Null | Key | Default | Extra |\n+------------+-------------+------+-----+---------+-------+\n| id         | int         | NO   |     | 0       |       |\n| name       | varchar(30) | NO   |     | NULL    |       |\n| manager_id | int         | YES  |     | NULL    |       |\n+------------+-------------+------+-----+---------+-------+\n\n SQL > SELECT * FROM departments2;\n+-----+----------------------+------------+\n| id  | name                 | manager_id |\n+-----+----------------------+------------+\n|  10 | Administration       |        200 |\n|  20 | Marketing            |        201 |\n|  30 | Purchasing           |        114 |\n|  40 | Human Resources      |        203 |\n|  50 | Shipping             |        121 |\n-- ... ...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])])])]),s._v(" "),n("h3",{attrs:{id:"查询-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询-2"}},[s._v("#")]),s._v(" 查询")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("DESC 表名;")])]),s._v(" "),n("p",[s._v("查询表结构")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("SHOW CREATE TABLE 表名;")])]),s._v(" "),n("p",[s._v("查询创建数据表的命令包括默认状态")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("SHOW TABLES;")])]),s._v(" "),n("p",[s._v("查询当前数据库有哪些表")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("SHOW TABLES FROM 库名;")])]),s._v(" "),n("p",[s._v("查询指定数据库有哪些表")])])]),s._v(" "),n("h3",{attrs:{id:"重命名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重命名"}},[s._v("#")]),s._v(" 重命名")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("重命名表（方式一）")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("RENAME TABLE 旧表名\nTO 新表名;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("重命名表（方式二）")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ALTER TABLE 旧表名\nRENAME TO 新表名;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])]),s._v(" "),n("h3",{attrs:{id:"删除-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#删除-2"}},[s._v("#")]),s._v(" 删除")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("DROP TABLE 表名;")])]),s._v(" "),n("li",[n("code",[s._v("DROP TABLE IF EXISTS 表名;")])])]),s._v(" "),n("h3",{attrs:{id:"清空"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#清空"}},[s._v("#")]),s._v(" 清空")]),s._v(" "),n("p",[s._v("删除数据，保留表结构")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("TRUNCATE TABLE 表名;")])])]),s._v(" "),n("h3",{attrs:{id:"字段操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字段操作"}},[s._v("#")]),s._v(" 字段操作")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("添加字段")]),s._v(" "),n("p",[n("em",[s._v("默认插入最后")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ALTER TABLE 表名\nADD 字段名 类型;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("插入最前面")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ALTER TABLE 表名\nADD 字段名 类型 FIRST;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("插入指定字段后面")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ALTER TABLE 表名\nADD 字段名 类型 AFTER 被插入的字段名;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("修改字段")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ALTER TABLE 表名\nMODIFY 字段名 类型 默认值...;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" SQL -> ALTER TABLE `departments2`\n\t -> MODIFY name varchar(20) default 'zhangsan';\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("重命名字段")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ALTER TABLE 表名\nCHANGE 旧字段名 新字段名 新字段类型;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("删除字段")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ALTER TABLE 表名\nDROP COLUMN 字段名;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"三、ddl-和-dml-的-rollback-操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、ddl-和-dml-的-rollback-操作"}},[s._v("#")]),s._v(" 三、"),n("code",[s._v("DDL")]),s._v(" 和 "),n("code",[s._v("DML")]),s._v(" 的 "),n("code",[s._v("ROLLBACK")]),s._v(" 操作")]),s._v(" "),n("p",[n("code",[s._v("DDL")]),s._v(" 数据定义语言，操作对象是数据库、数据表，"),n("code",[s._v("DML")]),s._v(" 数据操作语言，目标对象是表里面的记录。")]),s._v(" "),n("p",[s._v("实现回滚的前提是执行了 "),n("code",[s._v("SET autocommit = FALSE")]),s._v("，关闭了自动提交。")]),s._v(" "),n("p",[s._v("回滚操作属于 "),n("code",[s._v("DCL")]),s._v(" 数据控制语言，包括有 "),n("code",[s._v("ROLLBACK")]),s._v("、"),n("code",[s._v("COMMIT")])]),s._v(" "),n("h3",{attrs:{id:"commit-和-rollback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commit-和-rollback"}},[s._v("#")]),s._v(" "),n("code",[s._v("COMMIT")]),s._v(" 和 "),n("code",[s._v("ROLLBACK")])]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("COMMIT")]),s._v(" 提交数据")]),s._v(" "),n("p",[s._v("一旦执行了 "),n("code",[s._v("COMMIT")]),s._v("，数据就无法回滚")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("ROLLBACK")]),s._v(" 回滚数据")]),s._v(" "),n("p",[s._v("讲数据回滚到最近的一次 "),n("code",[s._v("COMMIT")]),s._v(" 之后")])])]),s._v(" "),n("h3",{attrs:{id:"ddl-和-dml-回滚区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ddl-和-dml-回滚区别"}},[s._v("#")]),s._v(" "),n("code",[s._v("DDL")]),s._v(" 和 "),n("code",[s._v("DML")]),s._v(" 回滚区别")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("DDL")]),s._v(" 无法回滚")]),s._v(" "),n("li",[n("code",[s._v("DML")]),s._v(" 回滚前需要执行 "),n("code",[s._v("SET autocommit = FALSE")])])]),s._v(" "),n("h3",{attrs:{id:"测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),n("h4",{attrs:{id:"dml-回滚"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dml-回滚"}},[s._v("#")]),s._v(" "),n("code",[s._v("DML")]),s._v(" 回滚")]),s._v(" "),n("p",[n("em",[s._v("原始数据")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+---------------+----------------------+------------+-------------+\n| department_id | department_name      | manager_id | location_id |\n+---------------+----------------------+------------+-------------+\n|            30 | Purchasing           |        114 |        1700 |\n|            40 | Human Resources      |        203 |        2400 |\n|            50 | Shipping             |        121 |        1500 |\n|            60 | IT                   |        103 |        1400 |\n|            70 | Public Relations     |        204 |        2700 |\n|            80 | Sales                |        145 |        2500 |\n|            90 | Executive            |        100 |        1700 |\n|           100 | Finance              |        108 |        1700 |\n|           110 | Accounting           |        205 |        1700 |\n|           120 | Treasury             |       NULL |        1700 |\n|           130 | Corporate Tax        |       NULL |        1700 |\n|           140 | Control And Credit   |       NULL |        1700 |\n|           150 | Shareholder Services |       NULL |        1700 |\n|           160 | Benefits             |       NULL |        1700 |\n|           170 | Manufacturing        |       NULL |        1700 |\n|           180 | Construction         |       NULL |        1700 |\n|           190 | Contracting          |       NULL |        1700 |\n|           200 | Operations           |       NULL |        1700 |\n|           210 | IT Support           |       NULL |        1700 |\n|           220 | NOC                  |       NULL |        1700 |\n|           230 | IT Helpdesk          |       NULL |        1700 |\n|           240 | Government Sales     |       NULL |        1700 |\n|           250 | Retail Sales         |       NULL |        1700 |\n|           260 | Recruiting           |       NULL |        1700 |\n|           270 | Payroll              |       NULL |        1700 |\n+---------------+----------------------+------------+-------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("p",[n("em",[s._v("关闭自动提交，执行删除")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SQL >SET autocommit = FALSE;\nQuery OK, 0 rows affected (0.0004 sec)\nSQL > DELETE FROM departments2 WHERE department_id<100;\nQuery OK, 7 rows affected (0.0008 sec)\nSQL > SELECT * FROM departments2 ;\n+---------------+----------------------+------------+-------------+\n| department_id | department_name      | manager_id | location_id |\n+---------------+----------------------+------------+-------------+\n|           100 | Finance              |        108 |        1700 |\n|           110 | Accounting           |        205 |        1700 |\n|           120 | Treasury             |       NULL |        1700 |\n|           130 | Corporate Tax        |       NULL |        1700 |\n|           140 | Control And Credit   |       NULL |        1700 |\n|           150 | Shareholder Services |       NULL |        1700 |\n|           160 | Benefits             |       NULL |        1700 |\n|           170 | Manufacturing        |       NULL |        1700 |\n|           180 | Construction         |       NULL |        1700 |\n|           190 | Contracting          |       NULL |        1700 |\n|           200 | Operations           |       NULL |        1700 |\n|           210 | IT Support           |       NULL |        1700 |\n|           220 | NOC                  |       NULL |        1700 |\n|           230 | IT Helpdesk          |       NULL |        1700 |\n|           240 | Government Sales     |       NULL |        1700 |\n|           250 | Retail Sales         |       NULL |        1700 |\n|           260 | Recruiting           |       NULL |        1700 |\n|           270 | Payroll              |       NULL |        1700 |\n+---------------+----------------------+------------+-------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[n("em",[s._v("执行回滚，查询")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SQL > ROLLBACK;\nQuery OK, 0 rows affected (0.0014 sec)\nSQL > SELECT * FROM departments2;\n+---------------+----------------------+------------+-------------+\n| department_id | department_name      | manager_id | location_id |\n+---------------+----------------------+------------+-------------+\n|            30 | Purchasing           |        114 |        1700 |\n|            40 | Human Resources      |        203 |        2400 |\n|            50 | Shipping             |        121 |        1500 |\n|            60 | IT                   |        103 |        1400 |\n|            70 | Public Relations     |        204 |        2700 |\n|            80 | Sales                |        145 |        2500 |\n|            90 | Executive            |        100 |        1700 |\n|           100 | Finance              |        108 |        1700 |\n|           110 | Accounting           |        205 |        1700 |\n|           120 | Treasury             |       NULL |        1700 |\n|           130 | Corporate Tax        |       NULL |        1700 |\n|           140 | Control And Credit   |       NULL |        1700 |\n|           150 | Shareholder Services |       NULL |        1700 |\n|           160 | Benefits             |       NULL |        1700 |\n|           170 | Manufacturing        |       NULL |        1700 |\n|           180 | Construction         |       NULL |        1700 |\n|           190 | Contracting          |       NULL |        1700 |\n|           200 | Operations           |       NULL |        1700 |\n|           210 | IT Support           |       NULL |        1700 |\n|           220 | NOC                  |       NULL |        1700 |\n|           230 | IT Helpdesk          |       NULL |        1700 |\n|           240 | Government Sales     |       NULL |        1700 |\n|           250 | Retail Sales         |       NULL |        1700 |\n|           260 | Recruiting           |       NULL |        1700 |\n|           270 | Payroll              |       NULL |        1700 |\n+---------------+----------------------+------------+-------------+\n25 rows in set (0.0006 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("p",[n("em",[s._v("再执行一次删除，并执行 "),n("code",[s._v("COMMIT")])])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SQL > DELETE FROM departments2 WHERE department_id<100;\nQuery OK, 7 rows affected (0.0008 sec)\nSQL > SELECT * FROM departments2 ;\n+---------------+----------------------+------------+-------------+\n| department_id | department_name      | manager_id | location_id |\n+---------------+----------------------+------------+-------------+\n|           100 | Finance              |        108 |        1700 |\n|           110 | Accounting           |        205 |        1700 |\n|           120 | Treasury             |       NULL |        1700 |\n|           130 | Corporate Tax        |       NULL |        1700 |\n|           140 | Control And Credit   |       NULL |        1700 |\n|           150 | Shareholder Services |       NULL |        1700 |\n|           160 | Benefits             |       NULL |        1700 |\n|           170 | Manufacturing        |       NULL |        1700 |\n|           180 | Construction         |       NULL |        1700 |\n|           190 | Contracting          |       NULL |        1700 |\n|           200 | Operations           |       NULL |        1700 |\n|           210 | IT Support           |       NULL |        1700 |\n|           220 | NOC                  |       NULL |        1700 |\n|           230 | IT Helpdesk          |       NULL |        1700 |\n|           240 | Government Sales     |       NULL |        1700 |\n|           250 | Retail Sales         |       NULL |        1700 |\n|           260 | Recruiting           |       NULL |        1700 |\n|           270 | Payroll              |       NULL |        1700 |\n+---------------+----------------------+------------+-------------+\nSQL > COMMIT;\nQuery OK, 0 rows affected (0.0025 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[n("em",[s._v("执行回滚，查询")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SQL > ROLLBACK;\nQuery OK, 0 rows affected (0.0014 sec)\nSQL > SELECT * FROM departments2;\n+---------------+----------------------+------------+-------------+\n| department_id | department_name      | manager_id | location_id |\n+---------------+----------------------+------------+-------------+\n|           100 | Finance              |        108 |        1700 |\n|           110 | Accounting           |        205 |        1700 |\n|           120 | Treasury             |       NULL |        1700 |\n|           130 | Corporate Tax        |       NULL |        1700 |\n|           140 | Control And Credit   |       NULL |        1700 |\n|           150 | Shareholder Services |       NULL |        1700 |\n|           160 | Benefits             |       NULL |        1700 |\n|           170 | Manufacturing        |       NULL |        1700 |\n|           180 | Construction         |       NULL |        1700 |\n|           190 | Contracting          |       NULL |        1700 |\n|           200 | Operations           |       NULL |        1700 |\n|           210 | IT Support           |       NULL |        1700 |\n|           220 | NOC                  |       NULL |        1700 |\n|           230 | IT Helpdesk          |       NULL |        1700 |\n|           240 | Government Sales     |       NULL |        1700 |\n|           250 | Retail Sales         |       NULL |        1700 |\n|           260 | Recruiting           |       NULL |        1700 |\n|           270 | Payroll              |       NULL |        1700 |\n+---------------+----------------------+------------+-------------+\n18 rows in set (0.0009 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[n("em",[n("code",[s._v("COMMIT")]),s._v(" 之后数据无法回滚")])]),s._v(" "),n("h4",{attrs:{id:"ddl-回滚"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ddl-回滚"}},[s._v("#")]),s._v(" "),n("code",[s._v("DDL")]),s._v(" 回滚")]),s._v(" "),n("p",[n("em",[s._v("接着上面继续操作，清空数据表")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SQL >SET autocommit = FALSE;\nQuery OK, 0 rows affected (0.0004 sec)\nSQL > TRUNCATE TABLE departments2;\nQuery OK, 0 rows affected (0.0510 sec)\nSQL > SELECT * FROM departments2;\nEmpty set (0.0022 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("em",[s._v("回滚查询")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SQL > ROLLBACK;\nQuery OK, 0 rows affected (0.0014 sec)\nSQL > SELECT * FROM departments2;\nSQL > SELECT * FROM departments2;\nEmpty set (0.0022 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("em",[s._v("数据回滚失败")])])])}),[],!1,null,null,null);n.default=t.exports}}]);