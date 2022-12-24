### API

| 参数      | 说明                   | 类型             | 默认值  | 备选值 | 是否必填 |
| --------- | ---------------------- | ---------------- | ------- | ------ | -------- |
| value     | 输入值                 | [number,array]   | 0       | [0,0]  | 否       |
| onChange  | change 事件            | func(e:Event)    |         |        | 否       |
| range     | 是否选择范围           | bool             | false   |        | 否       |
| max       | 最大范围               | number           | 100     | 50     | 否       |
| min       | 最小范围               | number           | 0       | -100   | 否       |
| step      | 间隔                   | number           | 1       |        | 否       |
| dots      | 是否只能在标签值中选择 | bool             | false   |        | 否       |
| marks     | 标签值                 | object           |         |        | 否       |
| className | 自定义额外类名         | string           | `''`    |        | 否       |
