import React from "react";
import { useContext } from "react";
import UserContext from "context/Context";

function Home(){
    const name = useContext(UserContext);
    return(
        <>
        <h1>Hello {name}</h1>
        </>
    )
}
export default Home;