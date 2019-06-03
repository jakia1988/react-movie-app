import React, {Fragment} from 'react';
import RateMovie from './RateMovie'
import ContentWrapper from '../../core/ContentWrapper/ContentWrapper';

function Rate() {
    return (
        <Fragment>
            <RateMovie/>
        </Fragment>
    )
}

export default ContentWrapper(Rate)