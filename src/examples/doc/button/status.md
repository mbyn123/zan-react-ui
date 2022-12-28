```jsx
import { Button } from 'zan-react-ui';

ReactDOM.render(
	<div>
        <Button type="primary" loading onClick={() => alert('2222')}>按钮</Button>
        <Button disabled onClick={() => alert('1111')}>禁用按钮</Button>
    </div>
	, mountNode
);
```