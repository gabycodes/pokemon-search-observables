import React from 'react'
import styles from '../CSS-Modules/SearchForm.module.css'

const SearchForm = props => {
	const onChange = event => {
		props.updateCurrentQuery(event.target.value)
	}

	const placeholder = !props.isFormDirty ? "...Well? Look for something already!" : "Have another look!"
	
	return (
		<div className={styles.searchForm}>
		<h2>Gotta Browse 'Em All!</h2>
			<form action="">
				<input type="text" placeholder={placeholder} onChange={onChange} />
			</form>
		</div>
	)
}

export default SearchForm