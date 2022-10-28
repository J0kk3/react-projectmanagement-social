//use dynamic routes to fetch other users' profiles

//hooks
import { useParams } from "react-router-dom";

const ProfileDetailPage = () =>
{
    const params = useParams();
    // let { profileId } = params;
    //<Route path=":profileId" element={ <ProfileDetail /> } />

    console.log( params.profileId );

    return (
        <section>
            <h1>The ProfileDetail Page</h1>
            <p>{ params.profileId }</p>
        </section>
    );
};

export default ProfileDetailPage;