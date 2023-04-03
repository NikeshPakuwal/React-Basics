function ProfileCard({title, handel, image}){

    return (
        <div>
            <img src={image} />
            <div>Title is {title}</div>
            <div>Handle is {handel}</div>
        </div>
    );
}

export default ProfileCard;