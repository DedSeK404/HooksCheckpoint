import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export function Search() {
  const [search, setSearch]=useState('')
  console.log(search)
  return (
    <div style={{padding:"10px"}}>
    <p style={{color:"#e50814", fontSize:"30px"}}>Search By Name</p>
     <InputGroup  className="mb-3">
        <Form.Control onChange={(e) => setSearch(e.target.value)} style={{borderRadius:"0%"}}
          placeholder="Search By Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button style={{borderRadius:"0%"}} variant="outline-danger" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      <p style={{color:"#e50814", fontSize:"30px"}}>Search By Rating</p>
      <InputGroup className="mb-3">
        <Form.Control style={{borderRadius:"0%"}}
          placeholder="Search By Rating"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button style={{borderRadius:"0%"}} variant="outline-danger" id="button-addon2">
          Search
        </Button>
      </InputGroup>

    

      
    </div>
  );
}

