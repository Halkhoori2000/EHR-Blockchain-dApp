import React, { Fragment, useState, useEffect } from 'react';
import { Card, CardBody, Col, Container, Row, Form, FormGroup, Label, CardFooter, Button } from 'reactstrap';
import HeaderCard from '../../Common/Component/HeaderCard';

import { Breadcrumbs } from '../../../AbstractElements';
import CKEditors from 'react-ckeditor-component';
import axios from 'axios'
import { toast, Slide } from 'react-toastify'

const WelcomeMessage = () => {

    const [content, setContent] = useState('');
    const [data, setData] = useState(null);

    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        console.log(newContent)
        setContent(newContent);
    };
    useEffect(() => {
        getWelcomeMessage()
    }, [])
    async function getWelcomeMessage() {
        await axios
            .get(`${global.backendUrl}/getWelcome`)
            .then(response => {
                console.log(response)
                setData(response.data[0])
                setContent(response.data[0].welcome_message_text)
            })
            .catch(err => console.log(err))
    }
    async function update() {
        // console.log(value)
        // console.log(selectedUser.welcome_message_id)
        // return
        const formData = {
            welcome_message_id: data.welcome_message_id,
            welcome_message_text: content
        }

        await axios
            .post(`${global.backendUrl}/updateWelcomeMessage`, formData)
            .then(response => {
                console.log(response)
                toast.success("Text Updated Successfully",
                  { transition: Slide, hideProgressBar: true, autoClose: 2000 }
                )
            })
            .catch(err => console.log(err))
    }

    return (
        <Fragment>
            <Breadcrumbs mainTitle="Welcome Message" parent="Admin Pages" title="Welcome Message" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="Welcome Message" />
                            <Form className="form theme-form">
                                <CardBody>
                                    <Row>
                                        <Col sm="12">
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Message</Label>
                                                <CKEditors
                                                    activeclassName="p10"
                                                    content={content}
                                                    events={{
                                                        'change': onChange
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter className="text-end">
                                    <Button color="primary" className="m-r-15" onClick={(e)=>{
                                        update()
                                    }} >Submit</Button>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default WelcomeMessage;