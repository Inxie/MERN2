import React from "react";
import { useParams } from "react-router";

const WON = () => {
    const { wordOrNum } = useParams();

    return (
        <div>
            {
                isNaN(wordOrNum)?
                <h1>The word is: {wordOrNum}</h1>
                :
                <h1>The number is: {wordOrNum}</h1>
            }
        </div>
    );
};


export default WON;