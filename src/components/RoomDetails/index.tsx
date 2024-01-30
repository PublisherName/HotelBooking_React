import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';

import Container from "#components/Container"
import roomImage from "#assets/room.jpeg"
import LoadingSpinner from '#utils/LoadingSpinner';

import { RoomInterface } from '#interfaces/Room';
import { BASE_URL } from '#config';

function RoomDetails() {
    const [room, setRoom] = useState<RoomInterface | null>(null);
    const { id } = useParams<{ id: string }>();
    const [error, setError] = useState<string | null>(null);
    const [isvalidRoom, setIsValidRoom] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get<RoomInterface>(`${BASE_URL}/Room/Get/${id}`)
            .then(response => {
                setRoom(response.data);
                setIsValidRoom(true);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setIsValidRoom(false);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const arrivalDateRef = useRef<HTMLInputElement>(null);
    const departureDateRef = useRef<HTMLInputElement>(null);
    const nightsRef = useRef<HTMLInputElement>(null);

    const bookRoom = (event: React.FormEvent) => {
        event.preventDefault();

        const arrivalDate = arrivalDateRef.current?.value;
        const departureDate = departureDateRef.current?.value;
        const numberOfNights = nightsRef.current?.value;

        const bookingDetails = {
            roomId: room?.id,
            arrivalDate: arrivalDate,
            departureDate: departureDate,
            numberOfNights: numberOfNights,
            guestId: 1,
            status: 1
        };

        axios.post(`${BASE_URL}/Booking/CreateEdit`, bookingDetails)
            .then(response => {
                setError(null);
                window.location.href = `/booking/${response.data.id}`;
            })
            .catch(error => {
                console.error('There was an error!', error);
                if (error.response && error.response.data && error.response.data.errors) {
                    if (typeof error.response.data.errors === 'string') {
                        setError(error.response.data.errors);
                    } else {
                        const firstErrorKey = Object.keys(error.response.data.errors)[0];
                        const firstErrorMessage = error.response.data.errors[firstErrorKey][0];
                        setError(firstErrorMessage);
                    }
                } else {
                    setError('An unexpected error occurred.');
                }
            });

    };

    return (
        <Container heading="Room Details">
            {isLoading ? (
                <LoadingSpinner />
            ) : room && isvalidRoom ? (
                <div className="card shadow-lg mb-5 bg-light rounded">
                    <div className="card shadow-lg mb-5 bg-light rounded">
                        <img src={roomImage} className="card-img-top" alt="Room" style={{ maxHeight: "300px", objectFit: "cover" }} />
                        <div className="card-body">
                            <h5 className="card-title text-center text-primary">{room.roomName}</h5>
                            <p className="card-text text-center text-secondary">{room.roomDescription}</p>

                            <ul className="list-group list-group-flush d-flex flex-row justify-content-between">
                                <li className="list-group-item flex-fill text-center bg-primary text-white" style={{ padding: "20px", fontSize: "18px" }}><strong>Price:</strong> ${room.roomPricePerNight} per night</li>
                                <li className="list-group-item flex-fill text-center bg-secondary text-white" style={{ padding: "20px", fontSize: "18px" }}><strong>Type:</strong> {room.roomType}</li>
                                <li className="list-group-item flex-fill text-center bg-primary text-white" style={{ padding: "20px", fontSize: "18px" }}><strong>No of Beds:</strong> {room.roomNoOfBed}</li>
                            </ul>

                            <br />

                            {error && <div className="alert alert-danger">{error}</div>}

                            <form className="mt-4" onSubmit={bookRoom}>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="arrivalDate">Arrival Date</label>
                                        <input type="date" className="form-control" id="arrivalDate" ref={arrivalDateRef} required />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="departureDate">Departure Date</label>
                                        <input type="date" className="form-control" id="departureDate" ref={departureDateRef} required />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="nights">Number of Nights</label>
                                        <input type="number" className="form-control" id="nights" min="1" ref={nightsRef} required />
                                    </div>
                                </div>
                                <div className="card-footer d-flex justify-content-between bg-dark">
                                    <Link to="/" className="btn btn-light">Back to Home</Link>
                                    <button type="submit" className="btn btn-primary">Book Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="alert alert-danger" role="alert">
                        Room not found.
                    </div>
                </div>
            )}
        </Container>
    )
}

export default RoomDetails;