import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Card} from "react-bootstrap";
const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
    <Row>
    <div style={{ width: 1000, padding: 30, justify: "center", align: "center", margin: "auto"}}>
          <Card style={{ width: 1000 }}>
           <Card.Img src={urlToImage} alt={urlToImage} style={{ height: "200px", width: "300px", textAlign: "center", display: "block", justify: "center", align: "center", margin: "auto"}} />
            <Card.Body >
                <Card.Title><a href={url}>{title}</a></Card.Title>
                <Card.Text style={{ fontSize: "13px", color: "#8A8A8A" }}>{description}</Card.Text>
            </Card.Body>
           </Card>
    </div>
    </Row>
        // <Row>
        //     <Row className="">
        //             <Col style={{ margin: "50px" }}>
        //                 <Card style={{ width: "200px" }}>
        //                     <Card.Img variant="top" src={urlToImage} alt={urlToImage} style={{ height: "150px" }} />
        //                     <Card.Body >
        //                         <Card.Title><a href={url}>{title}</a></Card.Title>
        //                         <Card.Text style={{ fontSize: "13px", color: "#8A8A8A" }}>{description}</Card.Text>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //     </Row>
        // </Row>
    )
}

export default NewsItem
