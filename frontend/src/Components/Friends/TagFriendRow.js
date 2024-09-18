// dependencies
import { Checkbox, Label } from "flowbite-react";
import { useEffect, useState } from "react";
const TagFriendRow = ({userName, _id, tags, setTags}) => { 

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (isChecked) {
            setTags((prev) => {
                return [...prev, _id]
            })
        }
        else {
            const index = tags.indexOf(_id);
            if (index !== -1) {
                const new_arr = tags.slice(0, index).concat(tags.slice(index + 1));
                setTags([...new_arr])
            }
        }
    }, [isChecked]) 

    return (
        <div htmlFor= {userName} className = "flex justify-between w-full md:w-1/2 md:mx-auto lg:w-1/2 border-gray-400 border-1 align-middle p-2 sm:p-4 md:px-8 cursor-pointer">
            <Checkbox id={userName} checked = {isChecked}  onChange={() => setIsChecked(!isChecked)} className="cursor-pointer"/>
            <Label htmlFor={userName} className="cursor-pointer">{userName}</Label>
        </div>
    )
}
export default TagFriendRow;