import { Link } from "react-router-dom";
//components
import UserProfile from "../../Components/Profile/UserProfile";

const ProfilePage = () =>
{
    return (
        <section>
            <h1>The Profile Page</h1>
            <h3>FOR TESTING PURPOSES</h3>
            <ul>
                <li>
                    <Link to="user0">USER 0</Link>
                </li>
                <li>
                    <Link to="user1">USER 1</Link>
                </li>
                <li>
                    <Link to="user2">USER 2</Link>
                </li>
            </ul>
            <UserProfile />;
        </section>
    );
};

export default ProfilePage;