import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { SearchBox, useSearchBox } from "react-instantsearch";
import { Mic } from "lucide-react";
import { useEffect } from "react";
export function VoiceSearch() {
    const { query, refine } = useSearchBox();

    const { transcript } = useSpeechRecognition();

    useEffect(() => {
        if ( transcript && transcript !== query ) {
            refine(transcript)
        }
    }, [transcript, query, refine]);

    return (
        <div className="search-bar">
            <SearchBox placeholder="" className="searchbox" />
            <button onClick={() => { SpeechRecognition.startListening() }} type="button" className="ais-Pagination-link" style={{ height: 'auto' }}><Mic /></button>
        </div>
    )
}