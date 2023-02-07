import axios from 'axios';
import LoadingSpinner from 'components/Loading/Loading';
import useSWR from 'swr'

// this function will run and take data from backend
async function fetcher() {
    const {data} = await axios.get('http://localhost:4000/profile')

    return data
}

// this function will render our component 
const ProfileSwr = () => {
    // at first it will use object destructure and export our needed data and err 
    const {data,error} = useSWR("getUserData", fetcher )

    // if we got an error we will render it on page
    if(error) return <div>failed to load</div>
    // if we didnt recived data user will see the loading
    if(!data) return <LoadingSpinner/>
    // otherwise the page will render
    return ( 
        <div className="profile">
            {/* show us the user name */}
            name : {data.name}
        </div>
    );
}
 
export default ProfileSwr;