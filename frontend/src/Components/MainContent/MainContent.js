// files
import Editor from "../Editor/Editor";
import ContentHeader from "../Headers/ContentHeader";
import ContentFooter from "../Footer/ContentFooter";
import FriendsContent from "../Friends/FriendsContent";
const MainContent = () => {
    return (
        <section className = "flex flex-col items-center w-full max-h-screen overflow-y-scroll">
            <ContentHeader />
            <div className = "w-full mb-4">
                {/* <Editor /> */}
                <FriendsContent />
            </div>
            <ContentFooter />
        </section>
    )
}
export default MainContent;