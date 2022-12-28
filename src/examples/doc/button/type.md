```jsx
import { Button } from 'zan-react-ui';

ReactDOM.render(
<div>
    <Button type='primary' className='my-button'>主按钮</Button>
    <Button>次按钮</Button>
    <Button type="text"> 文字按钮</Button>
    <Button type='link'>链接按钮</Button>
    <Button type='danger'>危险按钮</Button>
    <Button outline type='primary'>主按钮</Button>
    <Button outline type='danger'>危险按钮</Button>
</div>
	, mountNode
);
```