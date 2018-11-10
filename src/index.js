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
			spaces: 10, 
			order: Array(10).fill(null), 
			pairs: 0, 
			turns: 0
		}

		create_memory(); 
	}

	create_memory(){

	}


}