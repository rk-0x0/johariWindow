import React from 'react';
import './mystyle.css'
import Button from '@material-ui/core/Button';



function Welcome() {

    function working(){
        window.scrollTo(0,document.documentElement.clientHeight);

    }

    function traits(){
 

        window.scrollTo(0,document.documentElement.clientHeight*2);
    }

    return (
        <div>
        <div className="App-container-main">
           
            <h1>Johari Window</h1>
            
            
                <div className="general" > 
                <p>Johari Window is a technique that aims to help people understand their emotional and physical relationship with self and other people. 
                    It is used in both a self-help context, group setting and in the corporate environment to improve individual and team performance.
                <br/><br/>
                This concept was created by Joseph Luft and Harrington Ingham in 1955 – some consider it derived from the psychological theories of Carl Jung.
                </p>
                </div>
                

                <div className='btn-main'>
                    
                    <button type="button" className="btn btn-outline-dark" onClick= {working}>
                        Ok , I have some doubt 
                        <i className="fa fa-question-circle-o"></i>
                    </button>
                    <div className='btn'><h5> - or -  </h5> </div>
                       
                    
                    <button type="button" className="btn btn-outline-dark" onClick= {traits} >
                    Let's , Get Started
                    <i className="fa fa-street-view"></i>
                    
                    </button>
                </div>
                
                


        </div>

                <div className="App-container-main">
                        
                <h1>How does it works ?</h1>


                <div className="general" > 
                    <p><strong>Step-1 :</strong> You are given a list of 56 adjectives , select five or six you feel best describe your personality.
                    <br/><strong>Step-2 :</strong> Ask your Colleagues, peers, family members or friends to do the same for you.
                    <br/>
                    These answers are then mapped onto a grid of four different boxes:<br/>

                    <br/> <strong>Arena</strong>: Adjectives selected by both participant and others, representing personality traits that are known to both groups
                    <br/>  <strong>Façade</strong>: Adjectives selected only by the participant, representing personality traits that outsiders are not aware of
                    <br/>  <strong>Blind spot</strong>: Adjectives chosen by others that the subject doesn’t select, representing personality traits the subject is not aware of
                    <br/>  <strong>Unknown</strong>: Adjectives that were selected by neither party, either representing personality traits that don’t apply to the participant or
                    hidden traits that neither group are aware of.
                    </p>
                </div>

                <div className='btn-main'>
                <Button variant="outlined" size="large" onClick= {traits}>Now ,Get Started<i className="fa fa-street-view"></i></Button>
                </div>

                </div>
        </div>
    );
}

export default Welcome;