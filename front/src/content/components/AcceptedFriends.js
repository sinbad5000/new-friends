import React from 'react';
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'

const AcceptedFriends = ({user, friend}) => {
  console.log({user})
  console.log({friend})
  return (
    <div id="profileCard">
      
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`${friend.avatar}`} />
  <Card.Body>
    <Card.Title>{friend.name}</Card.Title>
    <Card.Text>
      {friend.about}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Location: {friend.name}</ListGroupItem>
    <ListGroupItem>Age: {friend.age}</ListGroupItem>
    <ListGroupItem>Languages: {friend.languages}</ListGroupItem>
  </ListGroup>
</Card>

    </div>
  )
}
export default AcceptedFriends;