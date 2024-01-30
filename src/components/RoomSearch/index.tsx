import { BASE_URL } from '#config';
import { useState } from 'react';

interface RoomSearchProps {
    onRoomDetails: (data: any) => void;
}

function RoomSearch(props: Readonly<RoomSearchProps>) {

    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [roomType, setRoomType] = useState('all');


    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const url = `${BASE_URL}/Booking/GetAvailableRooms/${checkInDate}/${checkOutDate}/${roomType}`;

        const response = await fetch(url);
        const data = await response.json();
        props.onRoomDetails(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label htmlFor="checkInDate">Arrival Date:</label>
                    <input type="date" className="form-control" id="checkInDate" required value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="checkOutDate">Departure Date:</label>
                    <input type="date" className="form-control" id="checkOutDate" required value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
                </div>

                <div className="form-group col-md-3">
                    <label htmlFor="roomType">Room Type:</label>
                    <select className="form-control" id="roomType" required value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                        <option value="all">All</option>
                        <option value="single">Single Room</option>
                        <option value="double">Double Room</option>
                        <option value="villa">Villa</option>
                    </select>
                </div>
                <div className="form-group col-md-3  d-flex align-items-end">
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Check Availability</button>
                </div>
            </div>
        </form>
    )
}

export default RoomSearch