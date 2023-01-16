import React,{ useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Card from 'react-bootstrap/Card';







export function Add() {
 

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [rating, setRating] = useState("")
  
  const[list,setList]=useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,description,imgUrl,rating)
    const data={name,description,imgUrl,rating}
    if(name&&description&&imgUrl&&rating){
      setList((ls)=>[...ls,data])
      setName("")
      setDescription("")
      setImgUrl("")
      setRating("")
    }
    
  }
  const [search, setSearch] = useState("");
  return (
  <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}} >
    <form  style={{display:"flex",flexDirection:"column",gap:"10px"}} onSubmit={handleSubmit}>
      <h1 style={{color:"#e50814"}}>Add your Movie</h1>
      <div style={{display:"flex", gap:'40px'}} >
      <p style={{color:"#e50814"}}>Type Movie Name:</p>
        <input style={{width:"100%",height:"fit-content"}} name="name"  value={name} onChange={(e) => setName (e.target.value)}/>
        </div>
        <div style={{display:"flex", gap:'20px'}}>
        <p style={{color:"#e50814"}}>Type Movie Description:</p>
        <input style={{width:"100%",height:"fit-content"}} name="description"  value={description} onChange={(e) => setDescription (e.target.value)} />
        </div>
        <div style={{display:"flex", gap:'60px'}}>
        <p style={{color:"#e50814"}}>Type Poster Url:</p>
        <input style={{width:"100%",height:"fit-content"}} name="imgUrl"  value={imgUrl} onChange={(e) => setImgUrl (e.target.value)} />
        </div>
        <div style={{display:"flex", gap:'40px'}}>
        <p style={{color:"#e50814"}}>Type Movie Rating:</p>
        <input style={{width:"100%",height:"fit-content"}} name="rating"  value={rating} onChange={(e) => setRating (e.target.value)} />
        </div>
      <button style={{width:"100%"}} className="btn_add" >Add Movie</button>
      </form>
      <input
        style={{width:"100%"}}
        name="name"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search By Name/Rating"
      />
      {
        list.filter((el) => {
          return search.toLocaleLowerCase() === ""
            ? el
            : el.name.toLocaleLowerCase().includes(search) ||
                el.rating.includes(search);
        }).map((a)=><div key={a.id}>
           <Card  style={{ width: '10rem', backgroundColor:"black", borderRadius:"0%" }}>
      <Card.Img variant="top" src={a.imgUrl} />
      <Card.Body>
        <Card.Title style={{  color:"#e50814" }}>Movie Title:</Card.Title>
        <Card.Title style={{  color:"white" }}>{a.name}</Card.Title>
        <Card.Text style={{  color:"#e50814" }}>
          Description:
        </Card.Text>
        <Card.Text style={{  color:"white" }}>
          {a.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{  backgroundColor:"#101010", color:"white" }} >Rating: {a.rating}</ListGroup.Item>
      </ListGroup>
      <Button style={{borderRadius:"0%"}} variant="danger">Watch Movie</Button>
    </Card>
          </div>)
      }
    </div>
   
  );
}
