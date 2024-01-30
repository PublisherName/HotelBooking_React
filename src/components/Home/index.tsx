import { SetStateAction, useState, useEffect } from "react";
import { BASE_URL } from '#config';
import Container from "#components/Container"
import RoomSearch from "#components/RoomSearch"
import RoomCard from "#components/RoomCard"

import LoadingSpinner from "#utils/LoadingSpinner";

import { RoomInterface } from "#interfaces/Room"

function Home() {
    const [roomDetails, setRoomDetails] = useState<RoomInterface[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasFetched, setHasFetched] = useState(false);

    useEffect(() => {
        if (!hasFetched) {
            setIsLoading(true);
            fetch(`${BASE_URL}/Room/GetAll`)
                .then(response => response.json())
                .then(data => {
                    setRoomDetails(data.value);
                    setIsLoading(false);
                    setHasFetched(true);
                });
        }
    }, [hasFetched]);

    const handleRoomDetails = (details: SetStateAction<RoomInterface[] | null>) => {
        setRoomDetails(details);
    };

    return (
        <Container heading="Check Room Availability">
            <RoomSearch onRoomDetails={handleRoomDetails} />
            <div id="availableRoomsSection" className="mt-4">
                <h3>Available Rooms</h3>
                {isLoading ? (
                    <LoadingSpinner />
                ) : roomDetails && roomDetails.length > 0 ? (
                    <div className="card-deck">
                        {roomDetails.map((room) => (
                            <RoomCard key={room.id} room={room} />
                        ))}
                    </div>
                ) : (
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
                        <div className="alert alert-warning" role="alert">
                            No rooms found.
                        </div>
                    </div>
                )}
            </div>
        </Container>
    )
}

export default Home;