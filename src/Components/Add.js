import React,{ useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';







export function Add({handelAdd}) {
 

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [rating, setRating] = useState("")
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,description,imgUrl,rating)
    const data={name,description,imgUrl,rating}
    if(name&&description&&imgUrl&&rating){
      // setList((ls)=>[...ls,data])
      setName("")
      setDescription("")
      setImgUrl("")
      setRating("")
    }
    handelAdd(data)
  }
  
  return (
  <div style={{display:"flex",flexWrap:"wrap",gap:"10px", padding:"20px"}} >
    <form style={{display:"flex",flexDirection:"column",gap:"20px"}}  onSubmit={handleSubmit}>
      <h1 style={{color:"#e50814"}}>Add your Movie</h1>
      <div style={{display:"flex",}} >
        <InputGroup  value={name} onChange={(e) => setName (e.target.value)} className="mb-3">
        <InputGroup.Text style={{borderRadius:"0%"}}  id="inputGroup-sizing-default">
        Movie Name
        </InputGroup.Text>
        <Form.Control
        style={{borderRadius:"0%"}}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        </InputGroup>
      
        </div>
        
        <div style={{display:"flex", }}>
        <InputGroup value={description} onChange={(e) => setDescription (e.target.value)} className="mb-3">
        <InputGroup.Text style={{borderRadius:"0%"}} id="inputGroup-sizing-default">
        Movie Description
        </InputGroup.Text>
        <Form.Control
        style={{borderRadius:"0%"}}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        </InputGroup>
    
        </div>
        <div style={{display:"flex",}}>
        <InputGroup  value={imgUrl} onChange={(e) => setImgUrl (e.target.value)} className="mb-3">
        <InputGroup.Text style={{borderRadius:"0%"}} id="inputGroup-sizing-default">
        Poster Url
        </InputGroup.Text>
        <Form.Control
        style={{borderRadius:"0%"}}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        </InputGroup>
        
        </div>
        <div style={{display:"flex",}}>
        <InputGroup  value={rating} onChange={(e) => setRating (e.target.value)} className="mb-3">
        <InputGroup.Text style={{borderRadius:"0%"}} id="inputGroup-sizing-default">
        Movie Rating
        </InputGroup.Text>
        <Form.Control
        style={{borderRadius:"0%"}}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        </InputGroup>
        
        </div>
      <button style={{width:"100%"}} className="btn_add" >Add Movie</button>
      </form>
    </div>
   
  );
}
