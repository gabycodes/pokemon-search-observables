import React from 'react'

const SearchForm = props => {
	const onChange = event => {
		props.updateCurrentQuery(event.target.value)
	}

	return (
		<form action="">
			<input type="text" onChange={onChange} />
		</form>
	)
}

export default SearchForm