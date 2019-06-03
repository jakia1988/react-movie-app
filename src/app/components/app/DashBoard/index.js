import React, {Fragment} from 'react';
import EmptyList from './Empty';
import UserMovieList from './UserMovieList';
import ContentWrapper from '../../core/ContentWrapper/ContentWrapper';
import { checkRatingExists, getRatingData } from '../../../services/dashboardService'


function Dashboard() {
   
    return (
       <Fragment>
          {
            checkRatingExists() && getRatingData ().length > 0 ?  <UserMovieList list={getRatingData()}/> : <EmptyList/>
          } 
       </Fragment>
    )
}


export default ContentWrapper(Dashboard);