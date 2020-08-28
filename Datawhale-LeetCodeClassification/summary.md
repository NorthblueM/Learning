[TOC]

# 总结

---
### 拿到一个问题解决途径
1. 首先看问题能不能被分，divide-conquer

---
### 分治的模板步骤
#### 伪代码

```C++
class Solution {
  public:
    int divideConquer(data) {
        return divideConquerRec(data, param1, param2, ...);
    }
    
  private:
    int divideConquerRec(data, param1, param2, ...) {
        
        // 分治终止条件
        if (stop)
            return result;
        
        // 准备数据, 将数据拆分供给给子问题
        data1, data2 = split(data)
        
        // 子问题的解
        int subResult1 = divideConquerRec(data1, p11, p21, ...);
        int subResult2 = divideConquerRec(data2, p21, p22, ...);
        
        // 合并
        result = mergeResult(subResult1, subResult2);
        
        return result;
    }
  };
```

---

### 动态规划模板步骤
* 确定动态规划状态
* 写出状态转移方程（画出状态转移表）
* 考虑初始化条件
* 考虑输出状态
* 考虑对时间，空间复杂度的优化（Bonus）
---

### 查找问题分类
#### 查找表
* 查找有无: set, 储存键, 不可重复
* 查找对应关系(键值对应): dict，储存键值对，键不可重复
* 改变映射关系: map，关系映射

#### 对撞指针模板代码
```C++
sort(nums)

int l=0, r=nums.size()-1;

while(l<r){  
  if (target==sum) return target;
  else if (target>sum) r--;
  else (target<sum) l++;
}
```

---

### C++容器
#### unordered_map
* 利用hash，查找复杂度O(1)，建Hash时需要时间，储存Hash需要内存，无序，遍历顺序与创建顺序不一致，按照Hash顺序遍历

``` C++
#include <iostream>  
#include <unordered_map>  
#include <map>
#include <string>  
using namespace std;  

int main()  
{  
	//注意：C++11才开始支持括号初始化
    unordered_map<int, string> myMap={{ 5, "张大" },{ 6, "李五" }};//使用{}赋值
    myMap[2] = "李四";  //使用[ ]进行单个插入，若已存在键值2，则赋值修改，若无则插入。
    myMap.insert(pair<int, string>(3, "陈二"));//使用insert和pair插入

	//遍历输出+迭代器的使用
    auto iter = myMap.begin();//auto自动识别为迭代器类型unordered_map<int,string>::iterator
    while (iter!= myMap.end())
    {  
        cout << iter->first << "," << iter->second << endl;  
        ++iter;  
    }  

	//查找元素并输出+迭代器的使用
    auto iterator = myMap.find(2);//find()返回一个指向2的迭代器
    if (iterator != myMap.end())
	    cout << endl<< iterator->first << "," << iterator->second << endl;  
    
    system("pause");  
    return 0;  
}  
```

```
unordered_map输出：
3. 陈二
2. 李四
6. 李五
5. 张大

2. 李四
```

#### map
* 利用红黑树，查找复杂度O(lgN)，储存红黑树需要内存（还是比unorder_hash低），有序，使用中序遍历可将键值按从小到大遍历出

```
map输出：
2. 李四
3. 陈二
5. 张大
6. 李五

2. 李四
```

#### vector

##### 初始化
* 直接初始化：vector<string, int> v; v['def']=2; 
* 列表初始化：vector<string, int> v = {{'1sd', 2}, {'2ed', 2}; 列表初始化适用于c++11和以上的版本
* 用insert添加：vector<string, int> v; v.insert{'1sd', 2}; 
* 初始化为空：vector<vector<int>> p = {{}};当输出p时，输出的是 [ ] 而不是 [ 0 ]
* v['1st']; 表示如果'1st'存在则返回该值；如果不存在，则插入该key，value为int则默认为0，为string，则默认为空

##### 插入
* vector.insert(pos,elem);   //在pos位置插入一个elem元素的拷贝，返回新数据的位置。
* vector.insert(pos,n,elem);   //在pos位置插入n个elem数据，无返回值。
* vector.insert(pos,beg,end);   //在pos位置插入[beg,end)区间的数据，无返回值
* vecA.push_back(1); //在末尾插入元素

##### 删除
* vector.insert(pos,elem);   //在pos位置插入一个elem元素的拷贝，返回新数据的位置。
* vector.insert(pos,n,elem);   //在pos位置插入n个elem数据，无返回值。
* vector.insert(pos,beg,end);   //在pos位置插入[beg,end)区间的数据，无返回值
```C++
for (vector<int>::iterator it = v1.begin(); it != v1.end();)//删除容器里等于8的元素  
    {  
        if (*it == 8)  
        {  
            it = v1.erase(it);  
        }  
        else  
            it++;  
    } 
```

##### 排序
* 利用sort()
* 正向排序（从小到大）：sort(vec.begin(), vec.end());
* 逆向排序（从大到小）：sort(vec.rbegin(), vec.rend());