# 计算机视觉-街景字符编码识别
## 项目介绍
* Datawhale 第十三期学习活动
* 计算机视觉-街景字符编码识别 202005017-0602
* 天池：[零基础入门CV赛事- 街景字符编码识别](https://tianchi.aliyun.com/competition/entrance/531795/information)
* [Datawhale开源仓库](https://github.com/datawhalechina/team-learning/tree/master/03%20%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A7%86%E8%A7%89/%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A7%86%E8%A7%89%E5%AE%9E%E8%B7%B5%EF%BC%88%E8%A1%97%E6%99%AF%E5%AD%97%E7%AC%A6%E7%BC%96%E7%A0%81%E8%AF%86%E5%88%AB%EF%BC%89)

## Task
### Task1 赛题理解
* 赛题数据
* 数据标签
* 评测指标
* 数据读取
* 解题思路

### Task2 数据读取与数据扩增
* 图像读取 Pillow和OpenCV
* 数据扩增 torchvision.transforms
* 数据封装 Dataset：索引方式对数据样本读取，DataLoder：批量迭代读取

### Task3 字符识别模型
* CNN基础与发展
* PyTorch实现CNN模型，训练，预训练模型调用

### Task4 模型训练与验证
* 构造验证集
* 模型训练与验证
* 模型保存与加载
* 模型调参流程

### Task5 模型集成
* 集成学习方法：Stacking、Bagging和Boosting
* Dropout 
* 测试集数据扩增（Test Time Augmentation，简称TTA）
* Snapshot：使用cyclical learning rate进行训练模型，并保存精度比较好的一些checkopint，最后将多个checkpoint进行模型集成
* 结果后处理：统计每个位置字符出现的频率，单独训练一个字符长度预测模型

- 集成学习只能在一定程度上提高精度，并需要耗费较大的训练时间，因此建议先使用提高单个模型的精度，再考虑集成学习过程；
- 具体的集成学习方法需要与验证集划分方法结合，Dropout和TTA在所有场景有可以起作用。

### baseline提升
* 动态学习率，0.01->0.001，效果显著。
* L2正则化，有效果，参数不能太大resnet18：0.1即可。更大的网络需要参数较小，不然会欠拟合，resnet50：0.005会更好。
* resnet18->resnet50，有提升。
* TTA，测试集数据扩增。
* 模型融合，多折交叉，然后投票。