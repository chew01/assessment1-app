import {User} from "../types/user.ts";

interface UserRowProps {
    user: User;
}

function UserRow(props: UserRowProps) {
    return <div>
        <div className="font-bold">{props.user.name}</div>
        <p>Username: {props.user.username}</p>
        <p>{props.user.email}</p>
    </div>
}

export default UserRow