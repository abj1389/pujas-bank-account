import "./Bidder.css";

const Bidder = ({name, addBid}) => {


    return (
        <button onClick={addBid} className="bidder__button">
            {name} quiere pujar 5€
        </button>
    );
}

export default Bidder;