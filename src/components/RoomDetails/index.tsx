import { Link } from 'react-router-dom';

import Container from "#components/Container"
import roomImage from "#assets/room.jpeg"

function RoomDetails() {
    return (
        <Container heading="Room Details">
            <div className="card">
                <img src={roomImage} className="card-img-top" alt="Room Image" />
                <div className="card-body">
                    <h5 className="card-title">Room</h5>
                    <p className="card-text">A hotel room is a private space within a hotel establishment, typically furnished to provide lodging, comfort, and amenities for guests during their stay.</p>

                    <h5 className="mt-3">Additional Details:</h5>
                    <ul>
                        <li><strong>Price:</strong> $150 per night</li>
                        <li><strong>Services:</strong></li>
                        <ul>
                            <li>Free Wi-Fi</li>
                            <li>Room Service</li>
                        </ul>
                    </ul>
                </div>
                <div className="card-footer">
                    <Link to="/" className="btn btn-secondary">Back to Home</Link>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </Container>
    )
}

export default RoomDetails