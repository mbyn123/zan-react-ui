### API

#### Checkbox API

| 参数          | 说明                                  | 类型                  | 默认值  |
| ------------- | ------------------------------------- | --------------------- | ------- |
| checked       | 指定当前是否选中                      | `boolean`             | `false` |
| value         | 组件对应的值，在`CheckboxGroup`中使用 | any                   |         |
| disabled      | 使组件不可用                          | `boolean`             |         |
| indeterminate | 展示部分选中的模式                    | `boolean`             | `false` |
| onChange      | 变化时回调函数                        | `(e:Event) => void`   |         |
| style         | 内联样式                              | `React.CSSProperties` |         |
| className     | 自定义额外类名                        | `string`              |         |

#### Checkbox Group API

| 参数         | 说明                        | 类型                                | 默认值          |
| ------------ | --------------------------- | ----------------------------------- | --------------- |
| value        | 必填，指定选中的选项        | `any[]`                             | `[]`            |
| isValueEqual | 可选，判断 value 值是否相等 | `(a: any, b: any) => boolean`       | `() => a === b` |
| disabled     | 使组件不可用                | `boolean`                           |                 |
| onChange     | 变化时回调函数              | `(checkedValueList: any[]) => void` |                 |
| className    | 自定义额外类名              | `string`                            |                 |

