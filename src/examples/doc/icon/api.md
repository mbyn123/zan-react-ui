### API

| 参数         | 说明                              | 类型              | 默认值  |
| ------------ | --------------------------------- | ----------------- | ------- |
| title        | 自定义弹框标题                    | `ReactNode`       | `''`    |
| children     | 弹框内容: `<Dialog>xxxx</Dialog>` | `ReactNode`       | `null`  |
| footer       | 底部内容                          | `ReactNode`       | `null`  |
| visible      | 是否打开对话窗                    | `boolean`         | `false` |
| closeBtn     | 是否显示右上角关闭按钮            | `boolean`         | `true`  |
| onClose      | 关闭操作回调函数                  | `(event) => void` | `noop`  |
| mask         | 是否显示遮罩                      | `boolean`         | `true`  |
| maskClosable | 点击遮罩是否可以关闭              | `boolean`         | `true`  |
| className    | 自定义额外类名                    | `string`          | `''`    |
| style        | 自定义样式                        | `CSSProperties`   | `{}`    |
