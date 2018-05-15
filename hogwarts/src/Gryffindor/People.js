import React, { Component } from 'react';
import{Link} from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col } from 'reactstrap';
  
const People = props => {
console.log(props.people)
    return (<React.Fragment>

<div>{props.people.map(person=>{
return(
<Link color="black" style={{ textDecoration: 'none' }}to={`/griffindorperson/${person._id}`}>
         <Card>
         <CardImg top width="100%" src={person.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{person.name}</CardTitle>
          <CardSubtitle>Birth Year: {person.DoB}</CardSubtitle>
          <CardText>Gender: {person.gender}</CardText>
          <Row><Col xs="6">
          <CardText>Skin: {person.skin_color}</CardText>
          </Col>
          <Col xs="6">
          <CardText>Hair: {person.hair_color}</CardText>
          </Col>
          <Col xs="6">
          <CardText>Eye: {person.eye_color}</CardText>
          </Col>
          <Col xs="6">
          <CardText>HGT: {person.height}</CardText>
          </Col>

          </Row>
        </CardBody>
      </Card>
</Link>
   

)
})} </div>
        </React.Fragment>
);
}

export default People;
