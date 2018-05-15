import React, { Component } from 'react';
import axios from 'axios';
import{Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col } from 'reactstrap';
  
class Person extends Component  {
state={
    person:[]
}
componentDidMount(){
    const {id} =this.props.match.params;
 this.grabById(id)
}
grabById = id =>{
    axios
    .get(`http://localhost:5000/gryffindor/${id}`)
    .then(response =>{
        this.setState(()=> ({person: response.data}))
    })
    .catch(err=>{
        console.log(err)
    })
}
render(){
    console.log(this.state)
    return (    <React.Fragment>

         <Card> 
         <CardImg top width="100%" src={this.state.person.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.state.person.name}</CardTitle>
          <CardSubtitle>Birth Year: {this.state.person.DoB}</CardSubtitle>
          <CardText>Gender: {this.state.person.gender}</CardText>
          <Row><Col xs="6">
          <CardText>Skin: {this.state.person.skin_color}</CardText>
          </Col>
          <Col xs="6">
          <CardText>Hair: {this.state.person.hair_color}</CardText>
          </Col>
          <Col xs="6">
          <CardText>Eye: {this.state.person.eye_color}</CardText>
          </Col>
          <Col xs="6">
          <CardText>HGT: {this.state.person.height}</CardText>
          </Col>   
          <Col xs="12">
          <CardText>{this.state.person.lore}</CardText>
          </Col>  
          </Row>
          <Row>
              <Col xs="6">
          <Link to="/"style={{ textDecoration: 'none' }}><Button outline color="primary">Home</Button></Link>
          </Col>
          <Col xs="6">
          <Link to="/gryffindor"style={{ textDecoration: 'none' }}><Button outline color="primary">Gryffindor</Button></Link>
          </Col>
          </Row>
        </CardBody>
      </Card>

   
        </React.Fragment>
);
}
}

export default Person;