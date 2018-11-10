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
			deck: [],
			stance: Array(10).fill('card'),
			spaces: 5, 
			images: Array(10).fill(null), 
			pairs: 0, 
			turns: 0, 
			rep: Array(5).fill(1)
		}

		this.create_memory(); 
	}

	create_memory(){
		let cards = [c1, c2, c3, c4, c5]; 
		let remaining = [...Array(this.state.spaces * 2).keys()]; 

		for (let i = 0; i< this.state.spaces; i++){
			let first_index = i * 2; 
			let second_index = i * 2 + 1; 

			let fst_card = Math.floor(Math.random()*remaining.length);
			let n1mber = Math.floor(remaining[fst_card]/2);
			this.state.deck.push(n1mber);
			this.state.images[first_index] = cards[n1mber]; 
			remaining.splice(fst_card, 1);

			let snd_card = Math.floor(Math.random()*remaining.length);
			let n2mber = Math.floor(remaining[snd_card]/2); 
			this.state.deck.push(n2mber);
			this.state.images[second_index] = cards[n2mber]; 
			remaining.splice(snd_card, 1);
		}

		console.log('Prueba, shuffle de las imagenes');
		console.log(this.state.images);
		console.log(this.state.deck); 
	}

	handleClick(e){
		if (this.state.card_selected === e || this.state.stance[e] == 'card turned'){
			return; 
		}

		this.state.turns++;

		if(this.state.selected === true){
			if(this.state.card_selected === e){
				this.state.pairs++; 
				if(this.state.pairs === 5){
					//Ganador
					console.log("you won")
				}
				this.setState({
					card_selected: null, 
					selected: false
				})
			}

			this.state.stance[e] = 'card'; 
			this.state.stance[this.state.card_selected] = 'card'; 
			this.setState({
				card_selected: null, 
				selected: false
			})	
		}
		else{
			this.stance[e] = 'card turned'
			this.setState({
				selected: true, 
				card_selected: e
			})
		}
	}

	create_keys(index){
		let rep = this.state.rep[index]; 
		let newIndex = index + 2; 
		if (newIndex === 4){
			newIndex = 7; 
		} 
		this.state.rep[index]++; 

		console.log(Math.pow(newIndex, rep))
		return Math.pow(newIndex, rep)
	}

	render(){
		const images = [c1, c2, c3, c4, c5]; 
		const id = 0;
		console.log('Pruebas, rep')
		return(
			<div className = "playmat">
				{
					this.state.deck.map((index)=>{
						return (
							<div className="container">
								<div className = {this.state.stance[index]}>
									<div
										key={this.create_keys(index).value}
										className="face"
										onClick = {this.handleClick.bind(this, index)}>
									</div>
									<div
										key={this.create_keys(index).value}
										className="back"
										style = {{backgroundImage: 'url(' +images[index]+ ')'}}
										>
									</div>
								</div>
							</div>

						)

					})
				}
			</div>

			)
	}
}


ReactDom.render(
	<Memoria />,
	document.getElementById('root')
)