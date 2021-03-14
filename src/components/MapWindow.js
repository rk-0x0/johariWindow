import React from 'react';


function MapWindow(props) {

    function working(){
        window.scrollTo(0,document.documentElement.clientHeight);

    }
    function update(){
        alert("This feature is on its way!\n Thanks");
    }
    return (
        <div>
        <div className="App-container">

            <div className="grid">
                <div className="flexi">
                    <h1>Arena - Open self <i type="button" className="fa fa-info-circle" onClick={working}></i></h1>
                    {props.arenaList.map((adj)=>
                   <button type="button" className="btn btn-success flexi disabled"> {adj}</button>)}
                </div>
                <div className="flexi">
                   <h1>Blind self <i type="button" className="fa fa-info-circle" onClick={working}></i></h1>
                {props.blindList.map((adj)=>
                   <button type="button" className="btn btn-dark flexi disabled"> {adj}</button>)}

                </div>
                
                <div className="flexi">
                   <h1>Facade - Hidden self <i type="button" className="fa fa-info-circle" onClick={working}></i></h1>
                  {props.facadeList.map((adj)=>
                   <button type="button" className="btn btn-primary flexi disabled"> {adj}</button>)}
                </div>
                <div className="flexi">
                   <h1>Unknown self <i type="button" className="fa fa-info-circle" onClick={working}></i></h1>
                {props.unknownList.map((adj)=>
                 <button type="button" className="btn btn-danger flexi disabled"> {adj}</button>)}

                </div>
            </div>
           
            <p>(For better result, please ask atleast two others to describe you)<i  type="button" className="fa fa-user-plus" onClick={update}></i></p>
            
        </div>
        <div>
            <h1>Made with love by RK
                <a href = "http://linkedin.com/in/rahul-k-yadav-bb4047151/">
                    <i className="fa fa-heart" href="http://linkedin.com/in/rahul-k-yadav-bb4047151/" >
                    </i>
                </a>
            </h1>
        </div>

        </div>
    );
}

export default MapWindow;