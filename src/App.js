import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  {Header}  from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Add } from "./Components/Add";
import { data } from "./Components/data";
import { MovieList } from "./Components/MovieList";





function App() {
  return (
    <div style={{background:"black"}}>
    <Header/>
    <Container >
      <div>
      <Row >
        <Col style={{display:'flex',flexWrap:"wrap",padding:"20px",gap:"10px"}}  className="a" sm={12}>
        <MovieList data={data}/>
        <Add/>
        </Col>
        
        
      </Row>
      </div>
     
    </Container>
    <Footer/>
    </div>
  );
}

export default App;
