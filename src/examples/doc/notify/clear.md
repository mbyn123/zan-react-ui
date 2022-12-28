```tsx
import { Notify } from 'zan-react-ui';

function App(){
    
    const clear = ()=>{
        // const id =  Notify.success('成功提示')
        // Notify.clear()
        Notify.clear()
    }
    
    return  (
       <div>
           <Button onClick={clear}>清除所有提示</Button>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```