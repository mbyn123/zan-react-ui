```tsx
import { Notify } from 'zent';

function App(){

    return  (
       <div>
           <Button onClick={() => Notify.info('常规提示',1000,()=>alert('回调执行'))}>自定义通知结束回调</Button>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```