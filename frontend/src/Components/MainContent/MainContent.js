// files
import Editor from "../Editor/Editor";
import ContentHeader from "../Headers/ContentHeader";
import ContentFooter from "../Footer/ContentFooter";
const MainContent = () => {
    return (
        <section className = "flex flex-col items-center w-full max-h-screen overflow-y-scroll">
            <ContentHeader />
            <div className = "w-full">
                <Editor />
            </div>
            <ContentFooter />
        </section>
    )
}
export default MainContent;