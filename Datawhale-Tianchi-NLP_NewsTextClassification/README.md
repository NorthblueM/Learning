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

### Task3 基于机器学习的文本分类
* 文本表示方法：one-hot, bag of words(Count Vectors, 字词出现次数), n-gram(加入组合词), tf-idf(词频*逆文档频率)

### Task4 基于深度学习的文本分类1
* FastText：通过Embedding层将单词映射到稠密空间，然后将句子中所有的单词在Embedding空间中进行平均，进而完成分类操作。
* 多折交叉调参

### Task5 基于深度学习的文本分类2
* 词向量word2vec：通过单词与上下文彼此预测。方便从新增语料中学习新增词的向量表达，是一种高效的在线学习算法。
* 算法：（1）Skip-gram(SG)预测上下文，（2）Continuous Bag of Words (CBOW)预测目标单词
* Skip-grams训练：（1）单词组合作为“words”处理，（2）对高频单词抽样，（3）Negative sampling负采样每次只更新一小部分权重，（4）Hierarchical Softmax，利用霍夫曼树替代从隐藏层到softmax层的映射。
* TextCNN：利用不同大小的多个卷积抽取n-gram特征，然后MaxPooling每个特征图，拼接形成向量表示文本。
* TextRNN：将句子中每个词输入双向LSTM，将两个方向最后一个位置隐藏层拼接表示文本。
* HAN：基于层注意力机制，在单词和句子级别分别编码并基于注意力获得文本表示，最后经Softmax进行分类。word encoder是获得句子表示，可用TextCNN、TextRNN或BERT替换。
