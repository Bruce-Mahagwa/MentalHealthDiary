// dependencies
import { Card } from "flowbite-react";
const SingleEntry = ({entry, createdAt, userName}) => {
    return (
        <Card className="max-w-sm cursor-pointer">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 {createdAt} {userName ? userName : ""}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {entry.substr(0, 50)}
            </p>
        </Card>
    )
}
export default SingleEntry;