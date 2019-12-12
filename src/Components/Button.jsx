import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../CSS-Modules/Button.module.css'

export default ({ url }) => {
  return <Link to={url} className={styles.button}>Back</Link>
}