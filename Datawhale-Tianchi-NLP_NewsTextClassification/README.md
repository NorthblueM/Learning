# 自然语言处理-新闻文本分类
## 项目介绍
* Datawhale 第十五期学习活动
* 自然语言处理-新闻文本分类 20200719-0804
* 天池：[零基础入门NLP - 新闻文本分类](https://tianchi.aliyun.com/competition/entrance/531810/introduction?spm=5176.12281973.1005.1.3dd52448Ml2gGv)
* [Datawhale开源仓库](https://github.com/datawhalechina/team-learning-nlp/tree/master/NewsTextClassification)

## Task
### Task1 赛题理解
* 数据：字符级别匿名文本，14类别
* 规模：训练20w条，测试集A 5w条，测试集B 5w条
* 评测指标：F1
* 思路：1. TF-IDF + 机器学习分类器，2. FastText，3. WordVec + 深度学习，4. BERT词向量

### Task2 数据读取与数据分析
* Pandas 读取数据
* 句子长度分析、新闻类别分布、字符分布（识别标点）、句子数目、各类最高频词
