### API
- `Notify.info(text: node, duration?: number, callback?: () => ()): number`
- `Notify.success(text: node, duration?: number, callback?: () => ()): number`
- `Notify.warn(text: node, duration?: number, callback?: () => ()): number`
- `Notify.error(text: node, duration?: number, callback?: () => ()): number`

`Notify.info`，`Notify.success`，`Notify.warn` 和 `Notify.error` 方法会返回一个 `id`，这个 `id` 可以作为 `Notify.clear(id)` 的入参，用于关闭指定 notify。

| 参数     | 说明         | 类型   | 默认值    |
| -------- | ------------ | ------ |--------|
| text     | 通知文案     | node   | `''`   |
| duration | 持续时间     | number | `2000` |
| callback | 关闭时的回调 | func   |        |

- `Notify.clear(number: id): void`

如果 `Notify.clear` 调用时没有传入 `id` 参数，所有当前未关闭的实例都会被关闭。
