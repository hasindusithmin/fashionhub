

export default function Comment({name,email,body}) {

    return (
        <div className="w3-row w3-padding w3-card-4 w3-center w3-margin-bottom w3-round-large">
            <h3>{name}</h3>
            <div>{email}</div>
            <p className="w3-jusity">
                {body}
            </p>
        </div>
    )

}