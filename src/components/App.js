//App
import React, {Component} from 'react';
import STLViewer from 'stl-viewer'

export default class extends Component {
	constructor() {
		super();
	
	}

	componentDidMount() {
	}

	render() {

		return (
			<div>	
				<h1>HEAF STLs</h1>
				<div className="clearfix">
					<div className="block">
					<STLViewer
						url='http://localhost:8080/src/assets/Octocat-v1.stl'
						width={400}
						height={400}
						modelColor='#B92C2C'
						backgroundColor='#EAEAEA'
						rotate={true}
						orbitControls={true}
					/>
					</div>
				</div>
			</div>
		)
	}


} 