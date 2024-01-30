import { Link } from 'react-router-dom';
import roomImage from '#assets/room.jpeg';

import { RoomInterface } from '#interfaces/Room';

type RoomCardProps = {
    room: RoomInterface;
};

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
    return (
        <div className="card shadow-lg mb-5 bg-light rounded">
            <img src={roomImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center text-primary">{room.roomName}</h5>
                <p className="card-text text-center text-secondary">
                    This is a <strong className="text-dark">{room.roomType}</strong> room with <strong className="text-dark">{room.roomNoOfBed}</strong> bed(s).
                    It costs <strong className="text-dark">{room.roomPricePerNight}</strong> per night.
                </p>
                <p className="card-text text-center text-secondary">{room.roomDescription}</p>
            </div>
            <div className="card-footer bg-primary">
                <Link to={`/room/${room.id}`} className="btn btn-light mx-auto d-block">More Details</Link>
            </div>
        </div>
    )
}

export default RoomCard;