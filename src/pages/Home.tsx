import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Common pages implemented with React + TypeScript</h1>
            <Link to="register">Register Form</Link><br/>
            <Link to="login">Login Form</Link>
        </div>
    );
}

export default Home