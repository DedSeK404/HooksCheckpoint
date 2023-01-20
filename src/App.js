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
import { useState } from "react";
import { Search } from "./Components/Search";




function App() {
  const[list,setList]=useState(data)
  const handelAdd=(newFilm)=>{
    setList([...list,newFilm])
  }
  const [search, setSearch] = useState("");
  const handelSName=(value)=>{
    setSearch(value)
  }

  const [searchRate, setSearchRate] = useState(0);
  const handelRate=(value)=>{
    setSearchRate(value)
  }
 return (
    <div style={{background:"black"}}>
    <Header/>
    <Container >
      <div>
        <Row>
        <Col className="c" sm={12}>
        <Search handelSName={handelSName} handelRate={handelRate} />
        </Col>
        </Row>
      <Row >
       
        <Col style={{display:'flex',flexWrap:"wrap",padding:"20px",gap:"10px"}}  className="a" sm={8}>
        <MovieList data={list} search={search} searchRate={searchRate}/>
        
        </Col>
        <Col className="b" sm={4}>
        <Add handelAdd={handelAdd}/>
        </Col>
        
      </Row>
      </div>
    
    </Container>
    <Footer/>
    </div>
  );
}

export default App;
