# 数据挖掘--资金流入流出预测
## 项目介绍
* Datawhale 第十六期学习活动
* 数据挖掘--资金流入流出预测 20200819-0825
* 天池：[数据挖掘--资金流入流出预测](https://tianchi.aliyun.com/competition/entrance/231573/introduction)
* [Datawhale开源仓库](https://github.com/datawhalechina/team-learning-data-mining/tree/master/PurchaseAndRedemptionForecast)，[组织者仓库](https://github.com/ChuanyuXue/The-Purchase-and-Redemption-Forecast-Challenge-baseline)

## Task
### Task1 数据探索与分析（2天）
##### 数据探索与分析1
1. 将每天的购买和赎回量聚合
2. 时间序列：以天为单位（总图）；以月为周期，以天为单位（分图）。
3. 以星期为周期，以天为单位。小提琴图、分布、柱状图、箱线图。与星期几的相关性、独立性分析。
4. 以月为周期，以天为单位。分布估计图、柱状图、折线图。
5. 每一天的热力图，纵轴：周数，横轴：周几。发现异常值。
6. 对节假日分析以及周边日期分析。
7. 异常值分析，小额大额分类讨论。
8. 与银行、余额宝利率相关性分析。前一天、前一周错位。大额、小额、总体分类讨论。

#### 数据探索与分析2
1. 分析大小额用户
2. 分析用户交易频次。冷启动用户与老用户。
3. 分析不同用户的属性之间交易的区别
4. 利率与交易量的关系
5. 购买或赎回方式之间的区别

### Task2 时间序列规则（1天）
* 以月为周期的周期因子法

### Task3 时间序列模型-R语言（1天）
* 时间序列分解，STL（Seasonal and Trend decomposition using Loess）分解
* ARIMA（整合移动平均自回归模型）模型

### Task4 特征工程（1天）
* 将每天的购买和赎回量聚合
* is特征：是假节日？是周几？上班？是周或月或假节日第几天？
* is特征：星期几的特征用onehot编码。
* is特征分析与剔除：箱线图对比，pearson相关性分析
* 距离特征：距离放假多少天，上班多少天，节假日多少天，月初月中等？
* 距离特征分析与剔除：点线图，pearson相关性分析
* 波峰波谷特征：距离波峰波谷天数
* 波峰波谷特征分析与剔除：点线图
* 周期因子：月、周
* 动态序列特征：以星期为周期，均值、中位数、最大值、最小值、偏度等
* 动态序列特征分析与剔除：pearson相关性分析
* 剔除无法有效分割数据集的特征：is特征分布估计图对比，MVTest挽回有依赖性但非线性相关特征，剔除复共线特征
* 选出优选特征：SHAP，Permutation importance。词云展示

### Task5 建模预测（1天）
* 分割数据：训练集、测试集
* 定义评价函数：AE，total_AE
* 融合模型：AIC赤池信息准则/BIC贝叶斯信息准则，选择模型
* 结果可视化：折线图、残差柱状图
* 模型：LinearRegression、DecisionTreeRegressor、RandomForestRegressor、GradientBoostingRegressor、MLPRegressor、XGBRegressor
* AIC模型平均、针对残差建模

### Task6 学习总结 （1天）
* 传统模型既有理论支持，结果还不错，例如周期因子时间序列规则模型
* 机器学习模型需要大量的特征工程，如果调不优可能不如传统模型
* 专业领域的研究模型是第一首选


### 其它工具
* mvtest.py：用于独立性检验，非线性相关，https://github.com/ChuanyuXue/MVTest