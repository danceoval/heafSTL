//App
import React, {Component} from 'react';
import STLViewer from 'stl-viewer'

export default class extends Component {
	constructor() {
		super();

		this.state = {
			names : ['Janiya', 'Josh', 'Ngeubou', 'Bryce']
		}
	
	}

	componentDidMount() {
	}

	render() {

		return (
			<div>	
				<h1>HEAF STLs</h1>
				<div className="clearfix">
					<div>
					{
						this.state.names.map((name,i) => {
							return (
								<div className="block" key={i}>
									<h3>{name}</h3>
									<STLViewer
										url={`https://glacial-everglades-21948.herokuapp.com/src/assets/${name}.stl`}
										width={400}
										height={400}
										modelColor='#B92C2C'
										backgroundColor='#EAEAEA'
										rotate={true}
										orbitControls={true}
									/>
								</div>
							)
						})
					}
					
					</div>
				</div>
			</div>
		)
	}


} 