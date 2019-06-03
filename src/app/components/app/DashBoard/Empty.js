import React from 'react';
import { Empty } from 'antd';


export default function EmptyList() {
    return (
     <div className="verticalAlign">
        <Empty description={<span>Explore and Review</span>}/>
     </div>   
    )
}
