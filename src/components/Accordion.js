import React, {useContext} from "react";
import {Accordion, AccordionContext, Card, useAccordionButton} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {categories} from "../Categories";

function AccordionItem({children, eventKey, callback}) {
    const {activeEventKey} = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey),);

    const isCurrentEventKey = activeEventKey === eventKey;

    return (<div className={`size-full ${isCurrentEventKey ? "underline" : ""}`}
                 onClick={decoratedOnClick}>
        {children}
        <p className={`float-end`}>+</p>
    </div>);
}

function SubAccordionItem({children, eventKey, callback}) {
    const {activeEventKey} = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey),);

    const isCurrentEventKey = activeEventKey === eventKey;

    return (<div className={`size-full text-sm p-0 ${isCurrentEventKey ? "underline" : null}`}
                 onClick={decoratedOnClick}>
        <p>{children}</p>
    </div>);
}

function SubCategory({category}) {
    return <Accordion defaultActiveKey={category.subcategories[0]?.id} className="w-[95%] relative float-end right-0">
        {category.subcategories.map((sub) => (
            <Card key={sub.id} className="h-1/4" style={{background: "#222", color: "white"}}>
                <Card.Header>
                    <SubAccordionItem eventKey={sub.id}>
                        #{sub.id} {sub.name}
                    </SubAccordionItem>
                </Card.Header>
                <Accordion.Collapse eventKey={sub.id}>
                    <Card.Body>
                        <p className="text-sm pl-5 border-l-2 border-solid border-l-white">{sub.description}</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>))}
    </Accordion>;
}

export const Choices = () => {
    return (
        <Accordion className={`w-[80%] justify-content-center absolute align-items-center overflow-y-auto mt-[30%]`}
                   defaultActiveKey="0">
            {(categories.map((category, index) => <Card key={index} className="mb-0.5"
                                                        style={{background: "#222", color: "white"}}>
                <Card.Header>
                    <AccordionItem eventKey={index}>#{category.id} {category.name}</AccordionItem>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                        {!category.subcategories ?
                            <p className="text-sm pl-3 border-l-2 border-solid border-l-white">{category.description}</p> :
                            <SubCategory category={category}/>}
                        <p className="float-end text-white mb-3.5 underline" onClick={() => {
                        }}>Далее&#8594;</p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>))}
        </Accordion>);
};
