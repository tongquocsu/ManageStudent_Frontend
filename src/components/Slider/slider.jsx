function slider(props) {
    return (
        <div>
          <div id={props.Id} className="carousel slide" data-bs-ride="carousel">
            <div className={props.class1}>
                <div className="carousel-item active h-100">
                    <img className="d-block h-100 object-fill" src={props.image1}/>
                </div>
                <div className="carousel-item h-100">
                    <img className="d-block h-100 object-fill " src={props.image2}/>
                </div>
                <div className="carousel-item  h-100 w-100">
                    <img className="d-block  object-fill" src={props.image3}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={props.target} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={props.target} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
      )
}

export default slider

