
export default function Information(props: {
    day: string,
    title: string,
    name: string
}) {
    return (
        <>
            <div>
                <div>
                    <span>
                        <span>{props.title}</span>
                    </span>
                    <span>
                        <span>{props.name}</span>
                        <span>{props.day}</span>
                    </span>
                </div>
            </div>
        </>
    )
}