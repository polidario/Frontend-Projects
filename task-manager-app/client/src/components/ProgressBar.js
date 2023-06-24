export default function ProgressBar({ progress }) {
    const container = {
        height: 20,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 50,
        margin: 50
    }
     
    const bar = {
        height: "100%",
        width: `${progress}%`,
        backgroundColor: "#90CAF9",
        borderRadius: "inherit",
    }
     
    const label = {
        padding: "1rem",
        color: "#000000",
    }

    return (
        <div className="ProgressBar" style={container}>
            <div role="progressbar" style={bar}
                 aria-valuenow={progress}
                 aria-valuemin={0}
                 aria-valuemax={100}>
                <span style={label}>{`${progress}%`}</span>
            </div>
        </div>
    );
}