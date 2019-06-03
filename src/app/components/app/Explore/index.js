import React, {Fragment} from 'react';
import SearchMovie from './SearchMovie'
import ContentWrapper from '../../core/ContentWrapper/ContentWrapper';

function Explore() {
    return (
        <Fragment>
            <SearchMovie/>
        </Fragment>
    )
}

export default ContentWrapper(Explore)