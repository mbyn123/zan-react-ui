```jsx
import { CheckBox } from 'zan-react-ui';

ReactDOM.render(
    <div>
        <CheckBox disabled/>
        <CheckBox disabled checked={true}/>
        <CheckBox disabled indeterminate /> 
    </div>
	, mountNode
);
```