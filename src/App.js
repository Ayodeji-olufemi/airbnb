import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/Card";

export default function App() {
    return(
        <div>
            <Header />
            <Banner />
            <Card
                img="./image.png"
                title="Life lessons with Katie Zaferes"
                rrp="136"
            />
        </div>
    )
}