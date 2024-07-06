import React from "react";
import List from "./components/List";
import './App.css'

const App = () => {
    return (
        <div>
            <h1 className="item">Hello App</h1>
            <List text="text" >
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
            </List>
        </div>
    )
}

export default App;