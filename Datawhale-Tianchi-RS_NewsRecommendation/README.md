# 推荐系统-新闻推荐
## 项目介绍
* Datawhale 第十九期学习活动
* 推荐系统-新闻推荐 20201122-20201206
* 天池：[零基础入门推荐系统 - 新闻推荐](https://tianchi.aliyun.com/competition/entrance/531842/introduction)
* [Datawhale开源仓库](https://github.com/datawhalechina/team-learning-rs/tree/master/RecommandNews)

## Task

### Task01：赛题理解+Baseline（3天）
#### 概况
* 利用之前点击新闻信息，预测最后一次浏览新闻
* 共30w用户，300w点击，36w多篇不同文章，提供新闻文本embedding表示
* 20w用户训练，5w用户测试集A，5w用户测试集B
#### 理解思路
* 将问题转化成特征+标签的监督学习问题
* 监督学习类型？特征？模型？数据量？
* (用户, 文章) --> 点击的概率(软分类) 逻辑回归模型
#### baseline
* 方法：itemcf
* 提交成绩：0.0984

### Task02：数据分析（2天）
* 用户重复点击
* 用户点击环境变化分析
* 用户点击新闻数量的分布
* 新闻点击次数分析
* 新闻共现频次：两篇新闻连续出现的次数
* 新闻文章信息
* 用户点击的新闻类型的偏好
* 用户查看文章的长度的分布
* 用户点击新闻的时间分析
