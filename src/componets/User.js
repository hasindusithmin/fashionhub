

export default function User({id,name,username,email,website,VIEWPOST}) {

    return (
        <div className="w3-row w3-padding w3-card-4 w3-center w3-margin-bottom w3-round-large">
            <h1 className="w3-opacity">{name}</h1>
            <img src={`https://via.placeholder.com/200?text=${username}`} alt={username} />
            <p>
                {email}
            </p>
            <p>
                {website}
            </p>
            <button className="w3-button w3-blue w3-round-xxlarge" onClick={()=>{VIEWPOST(id)}}><b>VIEW POSTS</b></button>
        </div>
    )

}