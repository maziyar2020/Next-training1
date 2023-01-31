const User = ({user}) => {
    return (
        <p key={user.id}>name : {user.name} -- status : {user.status} </p>
    );
}

export default User;