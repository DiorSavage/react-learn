const BtnGitHub = (props) => {
    return ( 
        <a target = '_blank' href={props.link} className="btn-outline">
            <img src={props.git} alt="" />
            GitHub repo
        </a>
    );
}

export default BtnGitHub;