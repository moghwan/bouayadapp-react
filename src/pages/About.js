import { Link } from "react-router-dom";

export default function About() {
    return <div>
        <h2>About</h2>
        <Link to="/">
            <button>back home</button>
        </Link>
    </div>;
}