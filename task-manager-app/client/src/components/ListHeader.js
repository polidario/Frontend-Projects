import Modal from "./Modal";
import { useState } from "react";

export default function ListHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="ListHeader">
                <button onClick={() => {
                    setIsModalOpen(true);
                }}>Add new task</button>
                <button>Logout</button>
            </div>

            {isModalOpen && <Modal mode="create" setIsModalOpen={setIsModalOpen} />}
        </>
        
    );
}