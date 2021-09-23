import React, {useState} from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import MasterReset from "./components/masterReset";
import AddCounter from "./components/addCounter"

//const shortid = require('shortid');

const App = () => {

    const [counters, setCounters] = useState([
        {id: 1, value: 4},
        {id: 2, value: 1},
        {id: 3, value: 0},
        {id: 4, value: 3},
    ]);

    const onIncrement = (id) => {
        const updatedCounters = counters.map(c => c.id === id ? {id, value: ++c.value} : c);
        setCounters(updatedCounters);
    }

    const onDecrement = (id) => {
        const updatedCounters = counters.map(c => c.id === id ? {id, value: c.value > 0 ? --c.value : c.value} : c);
        setCounters(updatedCounters);
    }
    const onReset = (id) => {
           const updateCounters = counters.map(c => {
            if (c.id === id) {
                c.value = 0
            }
            return c
        })
        setCounters(updateCounters)
    }
    const onDelete = (id) => {
        // const deleteCount  = counters.filter(c=>c.id!==id)
        // setCounters(deleteCount)
        const countersCopy = counters
        const countersRemove = countersCopy.find(c => c.id === id)
        const index = countersCopy.indexOf(countersRemove)
        countersCopy.splice(index, 1)
        const newArrCounter = countersCopy.map(c => c)// Создаем новый массив, который не ссылается на counters
        setCounters(newArrCounter)

    }

    const onAdd = () => {
        setCounters([
            ...counters,
            {
                id: Math.random(),
                value: 0,
            }

        ])
    }


    return (
        <React.Fragment>
            <NavBar/>
            <main className="container">
                <div className="row1">
                    <MasterReset
                    />
                    <AddCounter onAdd={onAdd}/>
                </div>
                <Counters onReset={onReset} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement}
                          counters={counters}/>
            </main>
        </React.Fragment>
    );
}

export default App;
