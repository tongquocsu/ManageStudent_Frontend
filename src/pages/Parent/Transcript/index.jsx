import ParentSidebar from '../../../components/Sidebar/parentIndex';
import TranscriptComp from '../../../components/ParentComp/TranscriptComp';

function Transcript() {
    return (
        <div className="flex">
            <ParentSidebar className=""/>
            <div className="flex-1 ml-52">
                <TranscriptComp />
            </div> 
        </div>
    )
}
export default Transcript;