// dependencies
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, TextInput } from 'flowbite-react';
import { FaSearch } from "react-icons/fa";
const ContentHeader = ({write_post, search_users=true, my_entries}) => {

    return (
        <header className = "my-4 w-4/5 sm:w-4/6 md:w-1/2 lg:w-1/3">
            {write_post && <h3 className = "text-center">Write Posts</h3>}
            {search_users && <h3 className = "text-center">Search Users</h3>}
            {/* navigation for my entries which included filter options */}
            {/* {my_entries && } */}
            {/* end of navigation for my entries */}

        </header>
    )
}
export default ContentHeader;