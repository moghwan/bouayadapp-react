import { Link } from "react-router-dom";

export default function About() {
    return <>
        <h2>About</h2>
        <Link to="/">
            <button>back home</button>
        </Link>
    </>;
}