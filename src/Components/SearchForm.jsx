import React from 'react'
import styles from '../CSS-Modules/SearchForm.module.css'

const SearchForm = props => {
	const onChange = event => {
		props.updateCurrentQuery(event.target.value)
	}

	return (
		<div className={styles.searchForm}>
		<h2>Gotta Browse 'Em All</h2>
			<form action="">
				<input type="text" onChange={onChange} />
			</form>
		</div>
	)
}

export default SearchForm