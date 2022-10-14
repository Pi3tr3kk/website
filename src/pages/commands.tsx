import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import './css/commands.css'

const file = require('../commands.json')
export default function Commands() {
    let data = Object.values(file)

    function displayCommands(): any {
        return data.map((cmd: any) =>
            <Card className="command">
                <Card.Title>{cmd.name}</Card.Title>
                <Card.Body>
                    <Card.Text>{cmd.description}</Card.Text>
                    <Card.Text>{cmd.aliases.join(', ')}</Card.Text>
                </Card.Body>
            </Card>
        )
    }


    return (
        <>
            <h1>Commands</h1>
            <CardGroup className="commands">
                {displayCommands()}
            </CardGroup>


        </>
    )
}

