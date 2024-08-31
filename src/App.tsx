import React, {useState} from "react";
import UserDisplay from "./components/UserDisplay.tsx";
import AuthorDisplay from "./components/AuthorDisplay.tsx";

function App() {
    const [authors, setAuthors] = useState<string[]>([]);
    const [value, setValue] = useState("");

    function handleInput(e: React.FormEvent<HTMLInputElement>) {
        setValue((e.target as HTMLInputElement).value);
    }

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setAuthors([...authors, value])
        setValue("");
    }

    return (
        <>
            <div className="flex h-screen w-screen">
                <div className="flex flex-grow bg-gray-200 p-4 gap-4">
                    <div className="flex flex-col flex-1 bg-white p-4 gap-4">
                        <h2 className="text-xl font-bold">Input author name</h2>
                        <input
                            className="border p-2"
                            value={value}
                            onInput={handleInput}
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                    <div className="flex flex-col flex-1 bg-amber-100 p-4 gap-4">
                        <h2 className="text-xl font-bold">Author names</h2>
                        <div className="overflow-y-auto">
                            <AuthorDisplay authors={authors}/>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 bg-red-200 p-4 gap-4">
                        <h2 className="text-xl font-bold">User list</h2>
                        <div className="overflow-y-auto">
                            <UserDisplay/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
