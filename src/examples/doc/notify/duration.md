```tsx
import { Notify } from 'zent';

function App(){

    return  (
       <div>
           <Button onClick={() => Notify.info('常规提示',1000)}>持续时间1s</Button>
           <Button onClick={() => Notify.success('成功提示',2000)}>持续时间2s</Button>
           <Button onClick={() => Notify.error('错误提示',3000)}>持续时间3s</Button>
           <Button onClick={() => Notify.warn('警告通知',4000)}>持续时间4s</Button>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```