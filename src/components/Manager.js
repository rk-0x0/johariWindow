import React, { Component } from 'react';
import MapWindow from './MapWindow';
import UserAdj from './UserAdj';

class Manager extends Component {

    constructor(props) {
        super(props);
        this.adj = [];
        this.state={
            validForBuddy : false ,
            validForMap : false,
            userList : [],
            buddyList : [],
            arenaList : [],
            facadeList : [],
            blindList : [],
            unknownList : [],
        }
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
        this.getUserAdj = this.getUserAdj.bind(this);
        this.getBuddyAdj = this.getBuddyAdj.bind(this);
        
    }

    
    getUserAdj(props){
        
        // console.log(props);
        this.setState({
            validForBuddy:true,
            userList : props,

        });
        setTimeout(() => { window.scrollTo(0,document.documentElement.clientHeight*3); }, 200);
        // setTimeout(function() { 
        //     this.setState({render: true}) 
        // }.bind(this), 1000)
        if(this.state.validForMap)
        {
            this.getBuddyAdj(this.state.buddyList);
        }
        
    }

    getBuddyAdj(props){
        

        this.setState({
            validForMap:true,
            buddyList : props,
          
        });
        setTimeout(() => { window.scrollTo(0,document.documentElement.clientHeight*4); }, 200);
        console.log(props);
        console.log(this.state.userList);
        var commonValues = props.filter(x => this.state.userList.includes(x));
        console.log(commonValues);

        let difference = props.filter(x => !this.state.userList.includes(x));
        console.log(difference);

        let Fdifference = this.state.userList.filter(x => !props.includes(x));
        console.log(Fdifference);

        let union = [...props, ...this.state.userList];
        let Udifference = this.li.filter(x => !union.includes(x));

        this.setState({
            blindList : difference,
            facadeList : Fdifference,
            arenaList : commonValues,
            unknownList : Udifference,
        });
       
    }

    render() {
        return (
            
            <div>
                <div>
                  <UserAdj param = "Select" adjHandler ={this.getUserAdj} />
                </div>

                <div >
                {(this.state.validForBuddy) ? <UserAdj param = "Ask your peer to select" adjHandler={this.getBuddyAdj} /> : null }        
                </div>
                
                <div>              
                {(this.state.validForMap) ? <MapWindow facadeList={this.state.facadeList} userList={this.state.userList} arenaList={this.state.arenaList} blindList={this.state.blindList} unknownList={this.state.unknownList}  /> : null}
                </div>

            </div>
        );
    }
}


export default Manager;