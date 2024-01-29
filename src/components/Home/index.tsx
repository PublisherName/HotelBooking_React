import Container from "#components/Container"
import RoomSearch from "#components/RoomSearch"
import RoomCard from "#components/RoomCard"

function Home() {
    return (
        <Container heading="Check Room Availability">
            <RoomSearch />
            <div id="availableRoomsSection" className="mt-4">
                <h3>Available Rooms</h3>

                <div className="card-deck">
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                </div>
            </div>
        </Container>
    )
}

export default Home