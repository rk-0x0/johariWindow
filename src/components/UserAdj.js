import React, { Component } from 'react';

class UserAdj extends Component {

    constructor(props) {
        super(props);
        this.userChosen =[];
        this.showInfo=false;
        this.state={
            l : [],
        };
        this.li = ['able',
        'accepting',
        'adaptable',
        'bold',
        'brave',
        'calm',
        'caring',
        'cheerful',
        'clever',
        'complex',
        'confident',
        'dependable',
        'dignified',
        'empathetic',
        'energetic',
        'extroverted',
        'friendly',
        'giving',
        'happy',
        'helpful',
        'idealistic',
        'independent',
        'ingenious',
        'intelligent',
        'introverted',
        'kind',
        'knowledgeable',
        'logical',
        'loving',
        'mature',
        'modest',
        'nervous',
        'observant',
        'organized',
        'patient',
        'powerful',
        'proud',
        'quiet',
        'reflective',
        'relaxed',
        'religious',
        'responsive',
        'searching',
        'self-assertive',
        'self-conscious',
        'sensible',
        'sentimental',
        'shy',
        'silly',
        'smart',
        'spontaneous',
        'sympathetic',
        'tense',
        'trustworthy',
        'warm',
        'wise'];

        this.addAdj = this.addAdj.bind(this);
        // this.displ = this.displ.bind(this);

    }
    
    addAdj (e) {
        
        if(this.userChosen.length !== 6){
            const val = e.target.innerHTML;
            if(!this.userChosen.includes(val))
            {
            
            this.userChosen.push(val);

            this.setState(
            {
                l:this.userChosen
                }
            );
            }
        }
        else{
            alert("Alright ! That's enough.");
        }
        if(this.userChosen.length>=5)
        {
            this.showInfo=true;
        }
        
    }
    deleteAdj(param){
        console.log(param);
        const ind = this.userChosen.indexOf(param);
        this.userChosen.splice(ind,1);
        this.setState(
            {
                l:this.userChosen
             }
         );
         if(this.userChosen.length<5)
         {
             this.showInfo=false;
         }

    }

    


    render() {
        return (
            <div>
            
            <div className="App-container">
                
                <div className='heads'>
                    <h5>{this.props.param} 5-6 adjectives from the following which best decribes you : </h5>
                </div>
                
                <div className="Grid-adj">
                    {this.li.map((adj)=>
                    <div>
                        <button type="button" id="jk" className="btn btn-outline-dark" onClick={this.addAdj }>
                            {adj}
                        </button>
                    </div>)}
                </div>

                    
            </div>

                <div className="adj-container">
                    
                    <div className="Grid-adj-container">

                        
                        {this.state.l.map((item)=> 
                        <div>        
                            <button type="button" className="btn btn-outline-success btn-lg" onClick={(e)=> this.deleteAdj(item)}>
                            {item}
                            <i className="fa fa-close"></i>    
                            </button>
                        </div>  
                        )}
        
                    </div>
                    

                    <div className='submit' style={{ display: this.showInfo ? "block" : "none" }}>
                        <button type="button" className="btn btn-dark btn-lg" onClick = {()=>this.props.adjHandler(this.state.l)}>
                            Go <i className="fa fa-check-square"></i></button>
                    </div>

                </div>

            </div>
        );
    }
}

export default UserAdj;