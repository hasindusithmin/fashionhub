
export default function POST({title,body}) {

    return (
        <div className="w3-row w3-padding w3-card-4 w3-center w3-margin-bottom w3-round-large">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )

}