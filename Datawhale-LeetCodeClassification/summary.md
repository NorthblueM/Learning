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
