import React, {Fragment, useState} from 'react'
import { Col, Row, Input, Select, message } from 'antd';
import axios from 'axios';
import apiConfig from '../../../config';
import ExploreMovie from './ExploreMovie';
import NoMovie from './NoMovie';

const Search = Input.Search;

function SearchMovie() {
    const [category, setcategory] = useState('s');
    const [data, setdata] = useState(null);
    const [isFetched, setisFetched] = useState(false);

    function handleChange(value) {
        setcategory(value);
    }
    async function handleMoiveSearch(value){
        await axios.get(`${apiConfig.baseUrl}${category}=${value}`)
            .then(res => {
            const data = res.data.Search; 
            data !== undefined ? setdata(data) : message.error('Please enter a valid moive name');
            data !== undefined ? setisFetched(true) : setisFetched(false);      
        })
    }
    return (
        <Fragment>
            <Row  style={{ width: '70%', margin: '0 auto' }}> 
             <Col span={18} push={6}>
                <Search
                    placeholder="Search"
                    size="large"
                    allowClear={true}
                    onSearch={value => handleMoiveSearch(value)}
                    style={{ width: '100%' }}
                    enterButton
                />
             </Col>
            <Col span={6} pull={18}>
                <Select defaultValue="Movie Title" style={{ width: '100%' }} size="large" onChange={handleChange}>
                    <Select.Option value="s">Movie Title</Select.Option>
                </Select>
            </Col>              
            </Row>
            { isFetched &&
                <div style={{marginTop: 50}}> <ExploreMovie data={data}/> </div>
            }

            { !isFetched &&
                <div style={{marginTop: 200}}> <NoMovie/> </div>
            }

        </Fragment>
    )
}

export default SearchMovie;