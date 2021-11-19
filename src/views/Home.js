import { useEffect, useState } from 'react'

import {getCourses} from '../helpers/courseFetch'
import { Card, CardHeader, CardImg, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import '../css/style.css'
// import caratulaJS from '../assets/images/caratula/cover_javascript.png'
// import caratulaReact from '../assets/images/caratula/react.png'
const Home = () => {

  const [cursos, setCursos] = useState({
    datos:[],
    loading:true
  })

  useEffect(() => {
    getCourses().then(respuesta => {
      // console.log(respuesta)
      setCursos({
        datos:respuesta,
        loading:false
      })
    })
  }, [])
  return (
    <div className="container">
      <div className="row">
      {cursos.loading ? <h3>Cargando...</h3> : cursos.datos.map((curso, index) => (

          <div className="col-12 col-md-4 my-2" key = {index}>
      <Card className="h-100">
        <CardHeader>
          <CardTitle>{curso.title}</CardTitle>
        </CardHeader>
        <CardImg className="card-caratula" top width="100%" src={curso.thumbnail} alt="Card image cap" />
        <CardBody>
          <CardText>{curso.category[0]}</CardText>
          <CardText>{curso.description}</CardText>
          <CardText>
         
           {curso.original_price}
          </CardText>
        </CardBody>
      </Card>


        </div>
        ))
      }
        {/* <div className="col">
      <Card>
        <CardHeader>
          <CardTitle>Curso de javascript 🟡</CardTitle>
        </CardHeader>
        <CardImg className="card-caratula" top width="100%" src={caratulaJS} alt="Card image cap" />
        <CardBody>
          <CardText>Fundamentos del lenguaje web</CardText>
          <CardText>Aprende todo lo necesario para convertirte en un programador web junior y crece en la industria del desarrollo. </CardText>
          <CardText>
           Si quieres conocer más accede al{' '}
            <CardLink
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/'
              target='_blank'
            >
              Programa del curso
            </CardLink>{' '}
            y consulta lo que necesites a nuestro equipo de comunicaciones..
          </CardText>
        </CardBody>
      </Card>


        </div>
        <div className="col">

        <Card>
        <CardHeader>
          <CardTitle>Curso de Reactjs 🔵</CardTitle>
        </CardHeader>
        <CardImg  className="card-caratula" top width="100%" src={caratulaReact} alt="Card image cap" />
        <CardBody>
          <CardText>La librería más demandada del mercado</CardText>
          <CardText>Aprende a utilizar la librería de javascript más popular y súmate a la lista de los mejores desarrolladores frontend. </CardText>
          <CardText>
           Si quieres conocer más accede al{' '}
            <CardLink
              href='https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/'
              target='_blank'
            >
              Programa del curso
            </CardLink>{' '}
            y consulta lo que necesites a nuestro equipo de comunicaciones..
          </CardText>
        </CardBody>
      </Card>
        </div> */}
      </div>

    </div>
  )
}

export default Home
