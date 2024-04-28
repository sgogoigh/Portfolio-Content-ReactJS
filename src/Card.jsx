import PropTypes from 'prop-types'
function Card(props){
    return(
        <div className="card">
            <img className='card-image' 
            src='data:image/png;base64,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' 
            alt ="Ashva Article" />
            <a href={props.link}>
                <h2 className='card-title'>{props.title}</h2>
            </a>
            <p className='card-text'>{props.text}</p>
        </div>
    );
}

Card.propTypes ={
    link: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

Card.defaultProps = {
    link: "https://www.ashva.xyz/blogs",
    title: "Blog",
    text: "Blog for Ashva by Sunny"
}

export default Card