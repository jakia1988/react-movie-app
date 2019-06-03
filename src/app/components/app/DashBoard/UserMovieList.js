import React from 'react';
import { Card, Col, Row, Rate } from 'antd';

function UserMovieList({list}) {

    return (
        <Row gutter={16} className="moiveList">
         { 
            list.map( (item) =>                
                <Col span={4} key={item.imdbID}>    
                    <Card
                        hoverable
                        cover={<img alt="poster" src={item.Poster} />}>
                        <Card.Meta title={item.Title} description={`${item.Type} - ${item.Year}`} />
                        <br/>
                        <div>IMDb Rating:  <Rate disabled defaultValue={Number(item.imdbVotes)} style={{ fontSize: 12 }} count={10}/></div>   
                        <div>User Rating:  <Rate disabled defaultValue={Number(item.userRating)} style={{ fontSize: 12 }} count={10}/></div>   
                    </Card>
                </Col>
            )
         }
        </Row>
    )
}

export default UserMovieList;