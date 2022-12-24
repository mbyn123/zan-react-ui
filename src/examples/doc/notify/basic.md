```tsx
import { Notify } from 'zent';

function App(){

    return  (
       <div>
           <Button onClick={() => Notify.info('常规提示')}>常规提示</Button>
           <Button onClick={() => Notify.success('成功提示')}>成功提示</Button>
           <Button onClick={() => Notify.error('错误提示')}>错误提示</Button>
           <Button onClick={() => Notify.warn('警告通知')}>警告通知</Button>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```