import React from "react";
import ReactDOM from 'react-dom/client'
import Container from "./Container";
import ContainerApp from "./ContainerApp";
const root=ReactDOM.createRoot(document.getElementById("mdb"));
root.render(
    <>
    <ContainerApp />
    <Container />
    </>
)