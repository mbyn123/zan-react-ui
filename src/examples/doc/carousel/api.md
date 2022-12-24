### API

**`children` 中的元素必须支持透传 `style` 到原生节点上，否则样式会失效。**

| 参数               | 说明                                 | 类型                                                   | 默认值         | 备选值                                                     |
| ------------------ | ------------------------------------ | ------------------------------------------------------ |-------------| ---------------------------------------------------------- |
| transitionDuration | 切换动画持续时间(ms)                 | number                                                 | `300`       |                                                            |
| autoplay           | 是否自动切换                         | bool                                                   | `true`      | `false`, `true`                                            |
| autoplayInterval   | 自动切换间隔时间(ms)                 | number                                                 | `3000`      |                                                            |
| dots               | 是否显示下方翻页按钮及翻页按钮的样式 | bool \| `'round'` \ | `'line'`                          | `true`     | `true`, `false`, `'round'`, `'line'`                       |
| arrows             | 是否显示两侧翻页按钮                 | bool \| `'hover'`   | `false`    | `true`, `false`, `'hover'`                                 |
| arrowsDisabled     | 是否禁用两侧箭头                     | `{ left?: bool, right?: bool }`                        | {}          |
| onChange           | 切换时回调函数                       | (current: number, prev: number): void                  | `noop`      |                                                            |
| renderPrevArrow    | 自定义渲染切换上一个的按钮           | `(onPrev: () => void, disabled: boolean) => ReactNode` | 默认按钮        |                                                            |
| renderNextArrow    | 自定义渲染切换下一个的按钮           | `(onNext: () => void, disabled: boolean) => ReactNode` | 默认按钮        |                                                            |
| className          | 自定义额外类名                       | string                                                 | `''`        |                                                            |

### 实例方法

| 方法名  | 说明               | 参数名 | 参数描述                       |
| ------- | ------------------ | ------ | ------------------------------ |
| swipeTo | 手动切换轮播图     | index  | 需要切换的轮播图索引,从 0 开始 |
| prev    | 切换至上一张轮播图 |        |                                |
| next    | 切换至下一张轮播图 |        |                                |
