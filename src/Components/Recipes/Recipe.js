import React from 'react'

const Recipe = props => {
	const { id, title, image_url, social_rank, publisher, publisher_url } = props.recipe
	const { deleteRecipe } = props
	return (
		<div className='col-sm-4 mt-5'>
			<h4>{title}</h4>

			<img className='img-fluid' src={image_url} alt='' />

			<p>{publisher}</p>
			<p>{social_rank}</p>
			<a className='btn btn-primary' href={publisher_url}>
				View More
			</a>

			<button onClick={() => deleteRecipe(id)}>Delete</button>
		</div>
	)
}

export default Recipe
