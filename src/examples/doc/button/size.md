```jsx
import { Button } from 'zent';

ReactDOM.render(
	<div>
        <Button size='large' type='primary' icon='setting'>大号按钮</Button>
        <Button type='primary'>正常按钮</Button>
        <Button size='small' type='primary' icon='setting'>小号按钮</Button>
        <Button size='large' icon="folder"/>
        <Button icon="folder"/>
        <Button size='small' icon="folder"/>
    </div>
	, mountNode
);
```