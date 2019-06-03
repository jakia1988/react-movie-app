import React, {Fragment} from 'react';
import { Empty } from 'antd';

export default function NoMovie() {
    return (
       <Fragment>
         <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
            <span>
             search your favorite movie
            </span>
            }
        />
       </Fragment>
    )
}
