import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';

const EntryHeader = () => {
    return <h2></h2>
}

const EntryBody = props => {
    const lines = props.entryData.map((line, index) => {
        return (
            <Container key={index} className="shadow p-3 mb-5 bg-white rounded">
                <Row>
                    <Col>
                <h2 style={{font: "Lucida Sans Regular"}}>{line.title}</h2>
                <p style={{font: "Lucida Sans Regular"}}>{line.body}</p>
                <Button onClick={() => props.removeEntry(index)} style={{backgroundColor:"#f28482", font: "Lucida Sans Regular"}}>Delete</Button>
                </Col>
                </Row>
                
            </Container>
        )
    })

    return (
        <div>
            {lines}  
        </div>
    )
}

const Entries = (props) => {
    
        const { entryData, removeEntry } = props;

        return (
            <div>
                <h2 style={{paddingTop: "20px", paddingBottom: "20px", font: "Lucida Sans Regular"}}>My Entries</h2>
               
                <EntryHeader />
                <EntryBody entryData={entryData} removeEntry={removeEntry}/>
                <div id="results"></div>
                <Button onClick={() => document.getElementById("results").innerHTML = JSON.stringify(localStorage)} style={{backgroundColor:"#f28482", font: "Lucida Sans Regular"}} >See Previous Entries</Button>
            </div>

        )
    
}

export default Entries