import React from "react";
import "./ErrorModal.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
    return (
        <>
            <div className="backdrop" onClick={props.onConfirm}/>
            <Card className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="actions">
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </>
    );
}
export default ErrorModal;