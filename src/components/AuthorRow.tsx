interface AuthorRowProps {
    name: string;
}

function AuthorRow(props: AuthorRowProps) {
    return <div>{props.name}</div>
}

export default AuthorRow;