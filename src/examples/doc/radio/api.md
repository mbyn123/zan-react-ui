### API
#### RadioGroup

| 参数         | 说明                            | 类型                          | 默认值              |
| ------------ | ------------------------------- | ----------------------------- | ------------------- |
| value        | 用于设置当前选中的值            | `any`                         |                     |
| disabled     | 使组件不可用                    | `boolean`                     |                     |
| onChange     | 选项变化时的回调函数            | `(e: Event) => void`          |                     |
| isValueEqual | 可选参数，判断 value 值是否相等 | `(a: any, b: any) => boolean` | `(a, b) => a === b` |
| className    | 自定义额外类名                  | `string`                      |                     |


#### Radio

| 参数       | 说明                              | 类型                  | 默认值 |
| ---------- | --------------------------------- | --------------------- | ------ |
| value      | 根据 value 进行比较，判断是否选中 | `any`                 |        |
| disabled   | 使组件不可用                      | `boolean`             |        |
| labelStyle | label 的内联样式                  | `React.CSSProperties` |        |
| className  | 自定义额外类名                    | `string`              |        |
