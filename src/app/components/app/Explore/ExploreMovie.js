import React, {Fragment} from 'react'
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

function ExploreMovie({data}) {
    return(
      <Fragment>
        <Row gutter={16} className="moiveList">
            {
                 data.map((item) => (
                   <Col span={4} key={item.imdbID}>    
                        <Card
                            hoverable
                            cover={<img alt="poster" src={item.Poster} />}>
                            <Card.Meta title={item.Title} description={`${item.Type}-${item.Year}`} />
                            <br/>
                            <Link to={
                                `explore/${item.imdbID}`
                            }>Rate Movie</Link>
                        </Card>
                    </Col>
                ))
            }      
            
        </Row>
       </Fragment>
    )
    
}

export default ExploreMovie;