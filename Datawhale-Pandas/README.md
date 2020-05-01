# Pandas学习
---
## 项目介绍
- Datawhale 第十二期学习活动
- Pandas 20200418-0430

## Task
### Task1 chapter1 Pandas基础
* 文件读取与写入
* 基本数据结构：Series，DataFrame（修改行或列名，列的删除与添加）
* 常用基本函数：head和tail，unique和nunique，count和value_counts，describe和info，idxmax和nlargest，clip和replace，apply函数
* 排序

### Task2 chapter2 索引
* 单级索引：loc方法、iloc方法、[]操作符、布尔索引、快速标量索引、区间索引
* 多级索引：创建、多层索引切片、索引层的交换
* 索引设定：index_col参数、reindex和reindex_like、set_index和reset_index、rename_axis和rename
* 常用索引型函数：where函数、mask函数、query函数
* 重复元素处理：duplicated方法、drop_duplicates方法
* 抽样函数：

### Task3 chapter3 分组
* SAC过程：split-apply-combine
* groupby函数
* 聚合(统计)、过滤(组)和变换(元素值)
* apply函数：可能在所有的分组函数中，apply是应用最为广泛的，这得益于它的灵活性：

### Task4 chapter4 变形
* 透视表pivot，crosstab（交叉表）
* melt，压缩与展开
* 哑变量与因子化：one-hot

### Task5 chapter5 合并
* append/assign：利用Series或DataFrame添加行/列
* combine/update：利用规则在表中填充另一个表的数据，或覆盖更新数据
* concat：行/列两个方向拼接两个表。
* merge/join：横向拼接（笛卡尔积方式），适用于多级索引的情况。 join更适用于many_to_one模式和多个df对象。类似数据库的连接

### Task6 chapter1-5_practice
* 2002 年-2018 年上海机动车拍照拍卖
* 2007 年-2019 年俄罗斯机场货运航班运载量
* 新冠肺炎在美国的传播

## 版本说明
* python: 3.7
* numpy: 1.18.1
* pandas: 1.0.3
* matplotlib: 3.1.3
* scipy：1.4.1
* xlrd：1.2.0
* openpyxl：3.0.3


---
## 参考链接
本次次学习活动参考[Datawhale开源学习资料](https://github.com/datawhalechina/team-learning/tree/master/Pandas%E6%95%99%E7%A8%8B%EF%BC%88%E4%B8%8A%EF%BC%89)

[开源仓库](https://github.com/datawhalechina/joyful-pandas)