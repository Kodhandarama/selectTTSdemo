interface AudioProps {
    path: string
}

export default function Audio({ path }: AudioProps) {
    return (
        <audio controls style={{ width: '230px', height: '80px' }}>
            <source src={path} type="audio/wav" />
            Your browser does not support the audio element.
        </audio>
    );
}