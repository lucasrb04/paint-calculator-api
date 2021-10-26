import React, { useState } from 'react';
import '../App/App.css';

const initialValues = {
	wall0: {
		width0: '',
		height0: '',
	},
	wall1: {
		width1: '',
		height1: '',
	},
	wall2: {
		width1: '',
		height1: '',
	},
	wall3: {
		width1: '',
		height1: '',
	},
}

const CalcForm = ({ change }) => {
	const [state, setState] = useState(initialValues);

	const handleChange = (e) => {
		let { value, name, id } = e.target;
		setState({
			...state,
			[name]: {
				...state[name],
				[id]: value
			},
		});
	};

	const handleSubmit = () => {
		// change(state);
		console.log(initialValues);
		setState(initialValues);
	};

	return (
		<>
		{ Object.keys(state).map((wall, idx) => (
						<div className="row">
						<div className="col m6 s12">
							<label htmlFor={`width${idx}`}>Width (in meters)</label>
							<input
								id={`width${idx}`}
								name={wall}
								prop='width'
								type="number"
								min="1"
								max="15"
								placeholder="Type the width"
								value={state[wall].width}
								onChange={handleChange}
							/>
						</div>
						<div className="col m6 s12">
							<label htmlFor="height">Height (in meters)</label>
							<input
								id={`height${idx}`}
								name={`${wall}.height`}
								type="number"
								min="2.2"
								max="999"
								placeholder="Type the height"
								value={state[wall].height}
								onChange={handleChange}
							/>
						</div>
					</div>
		))}

			<div className="center">
				<button
					id="calc-btn"
					className="calculate-btn"
					type="button"
					// disabled={state.weight === '' || state.height === ''}
					onClick={handleSubmit}
				>
					Calculate PaintCans
				</button>
			</div>
		</>
	);
};

export default CalcForm;
