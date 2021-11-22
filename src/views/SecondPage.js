import { useEffect, useState } from 'react'
import {getUsers} from '../helpers/userFetch'
import { Card, CardHeader, CardBody, CardTitle, CardText, Alert, CardImg, CardLink } from 'reactstrap'
import '../css/style.css'


const SecondPage = () => {
const [users, setUsers] = useState({
  usuarios:[],
  loading:true
})

useEffect(() => {
 getUsers().then(respuesta => {
console.log(respuesta)
setUsers({
  usuarios:respuesta,
  loading:false
})
 })
}, [])

  return (
    <div className="container">
      <div className="row">
       {users.usuarios.map(user => (
        <div className="col-12 col-md-4 my-2" key={user.id}>
          <Card >
          <CardHeader>
          <CardTitle>{user.first_name} 🙌</CardTitle>
          </CardHeader>
          <div className="d-flex justify-content-center">

          <CardImg className="card-users" top src={user.avatar} alt={user.first_name} />
          </div>
          <CardBody className="d-flex">
          <CardText>{user.email}</CardText>
          <CardText>
            
          </CardText>
          </CardBody>
          </Card>
          </div>

       ))}
               
      </div>
    </div>
    
  )
}

export default SecondPage
