import styles from './Contact.module.scss'

const Contact = () => {
	return (
		<div className={styles.root}>
			<h2>Need some help? Contact us!</h2>
			<div className={styles.contactDetails}>
				<p>
					<b>Telephopne number:</b> (00) 000 000 000
				</p>
				<p>
					<b>Email:</b> test@test
				</p>
				<p>
					<b>Address:</b>
				</p>
				<p>Main Str, 00-000 London</p>
			</div>
		</div>
	)
}

export default Contact