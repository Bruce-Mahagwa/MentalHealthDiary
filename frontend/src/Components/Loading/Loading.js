// dependencies
import { Spinner } from "flowbite-react"
const Loading = () => {
    return (
        <div className = "my-auto mx-auto">
            <Spinner aria-label="Extra large spinner" color = "success" size="xl" />
        </div>
    )
}
export default Loading;