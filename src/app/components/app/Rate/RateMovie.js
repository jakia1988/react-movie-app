import React, {Fragment, Component} from 'react';
import axios from 'axios';
import { Row, Col, Skeleton, Typography, Rate, Icon, Slider, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { setStorage } from '../../../services/dashboardService'
import apiConfig from '../../../config';

class RateMovie extends Component {
    constructor(){
        super();    
        this.state = {
            isLoaded: false,
            data : {},
            rateValue: 1
        }
    }
    componentDidMount() {
      const id = window.location.pathname.split("/").pop();
       axios.get(`${apiConfig.rootUrl}?i=${id}&plot=full&${apiConfig.API_KEY}`)
            .then(res => {
            if(res){
                this.setState({
                    data : {...this.state.data, ...res.data},
                    isLoaded: true,
                    rateValue: 1
               });
            }      
            
        });
        
    }
    onSildeChange = value => {
        this.setState({
            rateValue: value
        });
    };
    saveRating = () => {
        const user = JSON.parse(localStorage.getItem('currentUser')).email;
        const rateData = {...this.state.data, 'userRating': this.state.rateValue, 'user': user}
        setStorage(rateData);
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <Fragment>
                { this.state.isLoaded &&    
                    <Row>
                        <Col span={18} push={6}>
                            <Typography.Title level={2}>{this.state.data.Title}</Typography.Title>
                            <Row>
                                <Col span={6}>
                                    <Typography.Text strong>IMDb Rating - </Typography.Text>
                                     <Rate disabled defaultValue={Number(this.state.data.imdbRating)} style={{ fontSize: 12 }} count={10}/>
                                </Col>   
                                <Col span={6}>   
                                    <Typography.Text strong>IMDb Votes - </Typography.Text>  <Icon type="like" />  {this.state.data.imdbVotes}
                                </Col>
                                <Col span={6}>   
                                    <Typography.Text strong>Released - </Typography.Text>  <Icon type="calendar" /> {this.state.data.Released}
                                </Col>
                                 <Col span={6}>   
                                    <Typography.Text strong>Duration - </Typography.Text>  <Icon type="calendar" /> {this.state.data.Runtime}
                                </Col>
                            </Row>
                            <br/>

                            <Typography.Paragraph>
                                {this.state.data.Plot}
                            </Typography.Paragraph> 
                             <br/>
                            <Row>
                                <Col span={12}>
                                    <Typography.Text type="secondary">Did you like {this.state.data.Title} ? Please Rate. </Typography.Text><br/><br/>
                                    <Slider
                                        min={1}
                                        max={10}
                                        onChange={this.onSildeChange}
                                        value={this.state.rateValue}/>
                                </Col>
                            </Row>
                              <br/>
                            <Row>
                                <Col span={12}>
                                    <Button type="primary" onClick={this.saveRating}>Rate Now</Button>
                                </Col>
                            </Row>


                        </Col>
                        <Col span={6} pull={18}>
                           <img src={this.state.data.Poster} alt="poster"/>
                        </Col>
                    </Row>
                }
                {
                    !this.state.isLoaded && 
                    <Skeleton/>
                }
            </Fragment>  
        )
    }
}

export default withRouter(RateMovie);

