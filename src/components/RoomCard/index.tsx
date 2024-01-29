import { Link } from 'react-router-dom';

import roomImage from '#assets/room.jpeg';

function RoomCard() {
    return (
        <div className="card">
            <img src={roomImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Room</h5>
                <p className="card-text"> hotel room is a private space within a hotel establishment, typically furnished to
                    provide lodging, comfort, and amenities for guests during their stay.</p>
            </div>
            <div className="card-footer">
                <Link to="/room/1" className="btn btn-primary mx-auto d-block">More Details</Link>
            </div>
        </div>
    )
}

export default RoomCard