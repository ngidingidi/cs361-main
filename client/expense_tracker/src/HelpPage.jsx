import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Navigation from "./components/Navigation";

function Help() {

    return (
        <> <div>
            <Navigation />
            <br />
            <br />
            <h5>Instructions</h5>
            <ul>
                <li>To add or create and expense, click on Add tab on the Navigation menu and enter expense details </li>
                <li>To edit an expense, click on the Home tab on the Navigation menu and click on the Edit icon on the table</li>
                <li>To delete an expense, click on the Home tab on the Navigation menu and click on the Delete icon on the table</li>
                <li>To contact us, email at expensetracker@gmail.com or call at 714-205-9878</li>
            </ul>
           </div>
        </>
    )
}

export default Help