
export default function POST({id,title,body,VIEWCOMMENTS}) {

    return (
        <div className="w3-row w3-padding w3-card-4 w3-center w3-margin-bottom w3-round-large">
            <h3>{title}</h3>
            <p>{body}</p>
            <div className="w3-center w3-padding">
                <button className="w3-button w3-green" onClick={()=>{VIEWCOMMENTS(id)}}>VIEW COMMENETS</button>
            </div>
        </div>
    )

}