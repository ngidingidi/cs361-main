import React from "react";
import Navigation from "./components/Navigation";
import ExpenseTable from "./components/ExpenseTable";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function NewCurrencyHome({expenses}) {


    return (
        <>
            <Navigation />
            <h2>Home Component</h2>
                <div>
                    <ExpenseTable expenses={expenses}/>
                </div>
        </>
    )
}

export default NewCurrencyHome;