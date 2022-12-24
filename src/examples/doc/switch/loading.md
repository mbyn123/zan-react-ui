```tsx
import { Switch } from 'zent';

function App(){
    return  (
       <div>
           <Switch loading checked={false}/>
           <Switch loading checked={true}/>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```