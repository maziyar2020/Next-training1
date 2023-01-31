import axios from "axios";
import User from "components/User";

const UsersList = ({ userList }) => {
    const users = userList.results
    return (
        users.map(user =>
            <User user={user} key={user.id} />
        )
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