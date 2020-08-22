# 数据挖掘--资金流入流出预测
## 项目介绍
* Datawhale 第十六期学习活动
* 数据挖掘--资金流入流出预测 20200819-0825
* 天池：[数据挖掘--资金流入流出预测](https://tianchi.aliyun.com/competition/entrance/231573/introduction)
* [Datawhale开源仓库](https://github.com/datawhalechina/team-learning-data-mining/tree/master/PurchaseAndRedemptionForecast)，[组织者仓库](https://github.com/ChuanyuXue/The-Purchase-and-Redemption-Forecast-Challenge-baseline)

## Task
### Task1 数据探索与分析（2天）
##### 
1. 将每天的购买和赎回量聚合
2. 时间序列：以天为单位（总图）；以月为周期，以天为单位（分图）。
3. 以星期为周期，以天为单位。小提琴图、分布、柱状图、箱线图。与星期几的相关性、独立性分析。
4. 以月为周期，以天为单位。分布估计图、柱状图、折线图。
5. 每一天的热力图，纵轴：周数，横轴：周几。发现异常值。
6. 对节假日分析以及周边日期分析。
7. 异常值分析，小额大额分类讨论。
8. 与银行、余额宝利率相关性分析。前一天、前一周错位。大额、小额、总体分类讨论。

#### 
1. 分析大小额用户
2. 分析用户交易频次。冷启动用户与老用户。
3. 分析不同用户的属性之间交易的区别
4. 利率与交易量的关系
5. 购买或赎回方式之间的区别

### Task2 时间序列规则（1天）
* 以月为周期的周期因子法
* 




* mvtest.py：用于独立性检验，https://github.com/ChuanyuXue/MVTest