// dependencies
import { Checkbox, Label } from "flowbite-react";
const TagFriendRow = () => {
    return (
        <div className = "flex justify-between w-full md:w-4/5 md:mx-auto lg:w-1/2 border-gray-400 border-1 align-middle p-2 sm:p-4">
            <Checkbox id="age" />
            <Label htmlFor="age">BruceM</Label>
        </div>
    )
}
export default TagFriendRow;