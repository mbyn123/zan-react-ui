/**
 * 复制文本到剪切板中
 *
 * @export
 * @param {*} value 需要复制的文本
 * @param {*} cb 复制成功后的回调
 */
export function copy(value: string, cb?: () => void) {
    // 动态创建 textarea 标签
    const textarea = document.createElement('textarea')
    // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
    textarea.readOnly = true
    textarea.style.position = 'absolute'
    textarea.style.left = '-9999px'
    // 将要 copy 的值赋给 textarea 标签的 value 属性
    // 网上有些例子是赋值给innerText,这样也会赋值成功，但是识别不了\r\n的换行符，赋值给value属性就可以
    textarea.value = value
    // 将 textarea 插入到 body 中
    document.body.appendChild(textarea)
    // 选中值并复制
    textarea.select()
    textarea.setSelectionRange(0, textarea.value.length)
    document.execCommand('Copy')
    document.body.removeChild(textarea)
    if (cb && Object.prototype.toString.call(cb) === '[object Function]') {
        cb()
    }
}