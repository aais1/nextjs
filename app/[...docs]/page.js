import Link from "next/link";

export const metadata = {
    title:"Docs",
    description:"Documentation for the project",
}

export default function Docs({params}) {
    return (
        <>
        <div className="flex flex-col space-y-4">
            <h1>Docs {params.docs[1]}</h1>
        </div>
        </>
    );S
}