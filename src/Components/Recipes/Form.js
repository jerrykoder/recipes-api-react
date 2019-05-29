import React from 'react'

const Form = ({ handleInput, hanldeData, title, publisher }) => {
	return (
		<div>
			<form onSubmit={hanldeData}>
				<input type='text' onChange={handleInput} name='title' placeholder='Title' value={title} />
				<input type='text' onChange={handleInput} name='publisher' placeholder='Publisher' value={publisher} />
				<button>Add</button>
			</form>
		</div>
	)
}

export default Form
