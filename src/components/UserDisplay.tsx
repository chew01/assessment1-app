import {useEffect, useState} from "react";
import getUsers from "../api/service.ts";
import {User} from "../types/user.ts";
import UserRow from "./UserRow.tsx";

function UserDisplay() {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers()
            .then(users => setUsers(users))
        // more graceful loading/error handling here
    }, []);

    return <div className="flex flex-col gap-4">
        {users.map(user => {
            return <UserRow key={user.id} user={user}></UserRow>
        })}
    </div>
}

export default UserDisplay;