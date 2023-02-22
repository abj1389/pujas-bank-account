import "./Bidder.css";

const Bidder = ({name, addBid}) => {


    return (
        <button onClick={addBid} className="ba__button">
            {name} quiere pujar 5€
        </button>
    );
}

export default Bidder;