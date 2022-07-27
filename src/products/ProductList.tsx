import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Button, Card, Image } from "semantic-ui-react"
import ProductContext from "./ProductContext";

export interface people {
  data: [{
    cell: string,
    email: string,
    gender: string,
    status: boolean,
    name: {
      first: string,
      last: string,
      title: string,
    }
  }]
}
export const ProductList = () => {
  let people: people = {
    data: [{
      cell: '',
      email: '',
      gender: '',
      status: false,
      name: {
        first: '',
        last: '',
        title: ''
      }
    }]
  }
  const product = useContext(ProductContext);
  const [user, setUser] = useState(people.data)
  const loadData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    setUser(data.results);
  };
  useEffect(() => {
    loadData()
  }, [])
  
  return (

    <Card.Group>
      {user && user.map((userData, i) =>
        <Card >
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />

            <Card.Header >Developer</Card.Header>
            <Card.Meta>Name : {userData.name.first} </Card.Meta>
            <Card.Description>
              Status : <strong>{product.status ? 'Active' : 'Disabled'}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color={product.status ? 'red' : 'green'} onClick={product.active} >
                {product.status ? 'Disable User' : 'Activate User'}
              </Button>
            </div>
          </Card.Content>
        </Card>
      )}
    </Card.Group>

  )
}