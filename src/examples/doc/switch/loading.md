```tsx
import { Switch } from 'zan-react-ui';

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