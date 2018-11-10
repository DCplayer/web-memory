import React from 'react'
import ReactDom from 'react-dom'
import './memory.css'
import c1 from './carta1.png'
import c2 from './carta2.png'
import c3 from './carta3.png'
import c4 from './carta4.png'
import c5 from './carta5.png'

class Memoria extends React.Component{
	constructor(props){
		super(props); 
		this.state = {
			selected: false, 
			card_selected: null, 
			table: [],
			spaces: 5, 
			indexes: Array(10).fill(null),
			images: Array(10).fill(null), 
			pairs: 0, 
			turns: 0
		}

		this.create_memory(); 
	}

	create_memory(){
		let cards = [c1, c1, c2, c2, c3, c3, c4, c4, c5, c5]; 
		let remaining = [...Array(this.state.spaces * 2).keys()]; 

		for (let i = 0; i< this.state.spaces; i++){
			let first_index = i * 2; 
			let second_index = i * 2 + 1; 

			let fst_card = Math.floor(Math.random()*remaining.length);
			this.state.indexes[first_index] = remaining[fst_card];
			this.state.images[first_index] = cards[remaining[fst_card]]; 
			remaining.splice(fst_card, 1);

			let snd_card = Math.floor(Math.random()*remaining.length);
			this.state.indexes[second_index] = remaining[snd_card];
			this.state.images[second_index] = cards[remaining[snd_card]]; 
			remaining.splice(snd_card, 1);
		}

		console.log('Prueba, shuffle de las imagenes');
		console.log(this.state.images);
		console.log(this.state.indexes); 
	}



	render(){
		return(
			<div>Hello World!</div>

			)
	}
}


ReactDom.render(
	<Memoria />,
	document.getElementById('root')
)