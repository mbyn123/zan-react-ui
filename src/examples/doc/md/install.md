
```js
import { useState } from 'react';
import { Button, Drawer, Input } from 'zent';

function SimpleDrawer() {
	const [visible, setVisible] = useState(false);
	const [size, setSize] = useState();

	const showDefaultDrawer = () => {
		setSize('default');
		setVisible(true);
	};

	const showSmallDrawer = () => {
		setSize('small');
		setVisible(true);
	};

	return (
		<>
			<Button onClick={showDefaultDrawer} type="primary">
				Open Default Size（728px）
			</Button>
			<Button onClick={showSmallDrawer} type="primary">
				Open Small Size（364px）
			</Button>
			<Drawer
				visible={visible}
				size={size}
				onClose={() => setVisible(false)}
				title="{i18n.drawerTitle}"
				footer={
					<div className="zent-drawer-demo__custom-width__drawer-footer">
						<Button>{i18n.secondaryButton}</Button>
						<Button type="primary">{i18n.primaryButton}</Button>
					</div>
				}
			/>
		</>
	);
}

ReactDOM.render(<SimpleDrawer />, mountNode);
```
