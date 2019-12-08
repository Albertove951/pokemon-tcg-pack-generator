import React from 'react';
import data from '../data'

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flip: false,
            image: 'https://images.pokemontcg.io/sm12/131.png',
            rarity: 'Rare Secret',
            id: ''
        }
        this.onFlip = this.onFlip.bind(this);
    }

    onFlip() {
        this.setState({
            flip: true
        })
    }

    //still needs testing
    onChange() {
        for(var i = 0; i < data.length; i++){
           var card = data[i];
           console.log(card.rarity)
           if (card.rarity === this.state.rarity){
           }
        }
    }

    render() {
        const { flip, image, rarity } = this.state;
        return(
            <div>
                 <button className='card' onClick={this.onFlip} style={{ display: flip ? 'none' : 'block' }}></button>
          {flip ? <img src={image} alt=''  value={rarity} className='images'/> : null}
            </div>
        )
    }
}

export default Cards
