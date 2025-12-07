import { Link, useLocation } from 'react-router-dom'
import './style.css'

const NotFoundPage = () => {
	const location = useLocation()

	return (
		<div className="not-found-page">
			<h1 className="not-found-title">404</h1>
			<h2 className="not-found-subtitle">Page Not Found</h2>

			<p className="not-found-message">
				The page {location.pathname} does not exist.
			</p>

			<Link to="/">Home Page</Link>
		</div>
	)
}

export default NotFoundPage
