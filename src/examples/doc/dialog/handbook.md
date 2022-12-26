## Dialog 对话窗

带背景遮罩的模态窗；常用于承载中小体量的详情、表单，或者必须由用户确认的结果反馈。


### 使用指南

- 命令式, 直接调用 `openDialog` 函数。

- 组件式, 通过控制 `visible` 来显示／隐藏对话窗。

- 推荐使用命令式, 不需要在外部维护一个 `visible` 属性, 更加方便。