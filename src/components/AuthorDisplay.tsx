import AuthorRow from "./AuthorRow.tsx";

interface AuthorDisplayProps {
    authors: string[];
}

function AuthorDisplay(props: AuthorDisplayProps) {
    return <div className="flex flex-col gap-4">
        {props.authors.map((authorName, index) => {
            return <AuthorRow key={index} name={authorName}></AuthorRow>
        })}
    </div>
}

export default AuthorDisplay;