import { useState } from "react";
import { Card, CardGroup, Form, Col, ButtonGroup, ToggleButton, Container, Row } from "react-bootstrap";
import './css/commands.css'

const file = require('../commands.json')
export default function Commands() {

    let [radioValue, setRadioValue] = useState('1')

    interface jsonData {
        name: string,
        description: string,
        type: number
    }

    let radios = [
        { name: 'All', value: '1' },
        { name: 'Fun', value: '2' },
        { name: 'Info', value: '3' },
        { name: 'Misc', value: '4' },
        { name: 'Music', value: '5' },
        { name: 'Special', value: '6' },

    ]

    let data: jsonData[] = Object.values(file)
    let [text, updateText] = useState('')
    let filterData: jsonData[] = []
    let searchData: jsonData[] = []
    let configCommands: jsonData[] = []
    let funCommands: jsonData[] = []
    let infoCommands: jsonData[] = []
    let miscCommands: jsonData[] = []
    let musicCommands: jsonData[] = []
    let specialCommands: jsonData[] = []

    function displayButtons() {
        return (
            <Container className="con">
                <Row>
                    {radios.map((radio, idx) => (
                        <Col xs={4} lg={2}>
                            <ToggleButton
                                key={idx}
                                className="filter-button"
                                id={`radio-${idx}`}
                                type="radio"
                                variant='primary'
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton></Col>
                    ))}</Row>
            </Container>
        )

    }

    function displayCommands() {
        function local(commands: jsonData[]) {
            function compare(a: jsonData, b: jsonData) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            }

            commands.sort(compare);

            return commands.map(cmd =>
                <Card className="command">
                    <Card.Title>{cmd.name}</Card.Title>
                    <Card.Body>
                        <Card.Text>{cmd.description}</Card.Text>
                        <Card.Text>{getType(cmd.type)}</Card.Text>
                    </Card.Body>
                </Card>
            )
        }
        data.forEach(cmd => {
            switch (cmd.type) {
                case 0: configCommands.push(cmd)
                    break
                case 1: funCommands.push(cmd)
                    break
                case 2: infoCommands.push(cmd)
                    break
                case 3: miscCommands.push(cmd)
                    break
                case 4: musicCommands.push(cmd)
                    break
                case 5: specialCommands.push(cmd)
                    break
                default: console.log('Error')
                    break
            }
        })

        if (radioValue !== '1') {
            switch (radioValue) {
                case '2': filterData = funCommands
                    break
                case '3': filterData = infoCommands
                    break
                case '4': filterData = miscCommands
                    break
                case '5': filterData = musicCommands
                    break
                case '6': filterData = specialCommands
                    break
            }
        } else filterData = data

        if (text === "") {
            return local(filterData)
        } else {
            filterData.forEach(v => {
                if (v.name.includes(text)) searchData.push(v)
            })

            return local(searchData)
        }


    }


    function getType(v: number) {
        let type = ""
        switch (v) {
            case 0: type = "config"
                break
            case 1: type = "fun"
                break
            case 2: type = "info"
                break
            case 3: type = "miscellaneous"
                break
            case 4: type = "music"
                break
            case 5: type = "special"
                break
            default: type = "error"
                break
        }
        return type
    }

    return (
        <>
            <h1>Commands</h1>
            <Form>
                <Form.Group controlId="search">
                    <Form.Control type="search" placeholder="Search" onChange={e => updateText(e.target.value)} />
                </Form.Group>
            </Form>
            {displayButtons()}
            <CardGroup className="commands">
                {displayCommands()}
            </CardGroup>
        </>
    )
}

