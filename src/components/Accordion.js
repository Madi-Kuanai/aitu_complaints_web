import React, {useContext} from "react";
import {Accordion, AccordionContext, Card, useAccordionButton} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {categories} from "../Categories";

function AccordionItem({children, eventKey, callback}) {
    const {activeEventKey} = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey),);

    const isCurrentEventKey = activeEventKey === eventKey;

    return (<div className={isCurrentEventKey ? "size-full underline" : "size-full"}
                 onClick={decoratedOnClick}>
        {children}
    </div>);
}

export const Choices = () => {
    return (<Accordion className="w-3/4" defaultActiveKey="0">
        {(categories.map((category, index) => <Card key={index} className="mb-0.5"
                                                    style={{background: "#222", color: "white"}}>
            <Card.Header>
                <AccordionItem eventKey={index}>#{category.id} {category.name}</AccordionItem>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
                <Card.Body>
                    <p className="text-sm">{category.description}</p>
                </Card.Body>
            </Accordion.Collapse>
        </Card>))}
    </Accordion>);
};
