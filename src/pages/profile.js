import axios from "axios";
import LoadingSpinner from "components/Loading/Loading";
import { useEffect, useState } from "react";

const Profile = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:4000/profile')
            .then(res => {
                setLoading(false)
                setData(res.data)
            })
            .catch(err => { console.log(err); }
            )

    }, [])

    if (loading) return <div className="loading">
        <LoadingSpinner />
    </div>


    return (
        <div className="profile">
            <p>UserName : {data.name}</p>
            <p>User Balance : {data.balance} </p>
        </div>
    );
}

export default Profile;