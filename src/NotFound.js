import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="errorpage">
            <img src="https://i.imgur.com/DWO5Hzg.png" alt="404-page" />
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    );
}

export default NotFound;