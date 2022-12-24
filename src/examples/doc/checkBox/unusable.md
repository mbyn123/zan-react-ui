```jsx
import { CheckBox } from 'zent';

ReactDOM.render(
    <div>
        <CheckBox disabled/>
        <CheckBox disabled checked={true}/>
        <CheckBox disabled indeterminate /> 
    </div>
	, mountNode
);
```