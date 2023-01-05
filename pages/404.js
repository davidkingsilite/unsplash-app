import Link from "next/link";

const PageNotFound = () => {
    return (
        <div>
            <h1> Page Not Found </h1>
            <h3> <Link href="/">Click here to go home </Link> </h3>
        </div>
    );
};

export default PageNotFound;