import React from 'react';
import Buytoken from './Buytoken';
import Redeemtoken from './Redeemtoken';
import "./tokenplace.css";

const Tokenpage = ({account, tokenCount, buyToken, redeemToken}) => {
    return (
        <div>
            <div className="topbar">
                <div className="acc">
                    Account Number: {account}
                </div>
                <div className="tokens">
                    Current Token Count: {tokenCount}
                </div>
            </div>
            <Buytoken buyToken={buyToken}/>
            <Redeemtoken redeemToken={redeemToken}/>
        </div>
    )
}

export default Tokenpage
