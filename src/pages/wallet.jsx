import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function wallet() {

    const currwallet = useSelector((state) => state.currwallet);
    const watchlist = useSelector((state) => state.watchlist[currwallet]);
    return (
        <> 
           <h1 className="text-5xl font-bold underline">The value of current token is {currwallet}</h1>
              <div>
                <h2 className="text-3xl font-bold">Watchlist</h2>
                <ul>
                  <li>{typeof(watchlist)}</li>
                  {/* {typeof(watchlist) == undefined ? (
                    <h1>NO watchlist</h1>
                  ) : (
                    watchlist.map((token) => (
                      <li key={token}>{token}</li>
                    ))
                  )} */}
                </ul>
                <Link to = "/watchlist">
                    <button >
                      Watchlist
                    </button>
                </Link>

                <Link to = "/send">
                <button>
                  send
                </button>
                </Link>
                
                

                </div>
        </>
    );
}
