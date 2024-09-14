// files
import Editor from "../Editor/Editor";
import ContentHeader from "../Headers/ContentHeader";
const MainContent = () => {
    return (
        <section className = "h-max border border-black border-2">
            <ContentHeader />
            <div>
                <Editor />
            </div>
        </section>
    )
}
export default MainContent;