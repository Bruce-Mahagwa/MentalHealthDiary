// dependencies
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, TextInput } from 'flowbite-react';
import { FaSearch } from "react-icons/fa";
const ContentHeader = () => {
    // {title, filter_ribbon, search_bar}
    return (
        <header className = "my-4 w-4/5 sm:w-4/6 md:w-1/2 lg:w-1/3">
            <h3 className = "text-center">Write Posts</h3>
            {/* navigation for my entries which included filter options */}
            {/* <nav className = "flex gap-2 flex-wrap md:gap-4 justify-center items-center">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        slotProps={{
                        textField: {
                            helperText: 'FROM',
                        },
                        }}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        slotProps={{
                        textField: {
                            helperText: 'TO',
                        },
                        }}
                    />
                </LocalizationProvider>
                <Button color = "success" className = "h-max">Filter Entries</Button>
            </nav> */}
            {/* end of navigation for my entries */}

            {/* start of navigation for search */}
            <nav className = "flex gap-2 flex-wrap md:gap-4 justify-center items-center">
                <TextInput type = "text" className = "w-3/4"/> 
                <FaSearch className = "cursor-pointer"/>
            </nav>
            {/* end of navigation for search */}
        </header>
    )
}
export default ContentHeader;