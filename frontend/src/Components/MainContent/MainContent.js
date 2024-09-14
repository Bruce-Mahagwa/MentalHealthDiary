// files
import Editor from "../Editor/Editor";
import ContentHeader from "../Headers/ContentHeader";
import ContentFooter from "../Footer/ContentFooter";
import FriendsContent from "../Friends/FriendsContent";
import Entries from "../Entries/Entries";
const MainContent = () => {
    return (
        <section className = "flex flex-col items-center w-full max-h-screen overflow-y-scroll">
            <ContentHeader />
            <div className = "w-full mb-4">
                {/* <Editor /> */}
                {/* <FriendsContent /> */}
                <Entries />
            </div>
            <ContentFooter />
        </section>
    )
}
export default MainContent;