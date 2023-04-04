function ProfileCard({title, handel, image, description}){

    return (
        <div className="card">
            <div className="card-image">
                <figure>
                    <img src={image} alt="pda logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="title is-6">{handel}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    );
}

export default ProfileCard;