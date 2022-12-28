```tsx
import React, {useState} from "react";
import { Carousel } from 'zan-react-ui';


function App(){
    const onChange = (currentIndex: number, prevIndex: number | null) => {
        console.log(currentIndex, prevIndex);
    }
    
    return  (
       <div>
           <Carousel className='card-wrapper' onChange={onChange}  >
               <div className='card'>1</div>
               <div className='card'>2</div>
               <div className='card'>3</div>
               <div className='card'>4</div>
           </Carousel>
       </div>
    )
}

ReactDOM.render(
    <App/>
	, mountNode
);
```