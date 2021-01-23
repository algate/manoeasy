# 高级进阶

## 函数节流和函数防抖

### 函数防抖 - break

### 函数节流 - continue

## MVVM原理
`Vue`是采用数据劫持结合发布订阅模式的方式，通过Object.defineProperty()来劫持各个属性的getter和setter，当数据变动的时候，发布消息给订阅者，触发相应的回调，然后更新视图。
