import axios from "axios";

const UsersList = (props) => {
    const users = props.userList.results
    return (
        <div>
            <h1>slm</h1>
            <div>
                {
                    users.map(user => {
                        return (<p key={user.id}>name : {user.name} -- status : {user.status} </p>)
                    })
                }
            </div>
        </div>
    );
}

export default UsersList;

export async function getStaticProps() {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character')
    return {
        props: {
            userList: data
        }
    }
}