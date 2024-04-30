// import PropTypes from 'prop-types'

// function Card(props){
//     return(
//         <div className="card">
//             <img className='card-image' 
//             src={props.imglink} alt ="Ashva Article" />
//             <a href={props.link}>
//                 <h2 className='card-title'>{props.title}</h2>
//             </a>
//             <p className='card-text'>{props.text}</p>
//         </div>
//     );
// }

// Card.propTypes ={
//     link: PropTypes.string,
//     title: PropTypes.string,
//     text: PropTypes.string,
//     imglink: PropTypes.string,
// }

// Card.defaultProps = {
//     link: "https://www.ashva.xyz/blogs",
//     title: "Blog",
//     text: "Blog for Ashva by Sunny",
//     imglink: "./assets/img_ashva",
// }

function Card(props) {
    return (
        <div className="card">
            <img className='card-image' alt ="Ashva Article"
            src={props.imglink}></img>
            <a href={props.link} className='card-title'>
                <h2 className="header-text">{props.title}</h2>
            </a>
            <p className='card-text'>{props.text}</p>
        </div>
    )
}

export default Card