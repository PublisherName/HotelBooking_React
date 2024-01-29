function RoomSearch() {
    return (
        <form>
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label htmlFor="checkInDate">Arrival Date:</label>
                    <input type="date" className="form-control" id="checkInDate" />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="checkInDate">Departure Date:</label>
                    <input type="date" className="form-control" id="checkInDate" />
                </div>

                <div className="form-group col-md-3">
                    <label htmlFor="roomType">Room Type:</label>
                    <select className="form-control" id="roomType">
                        <option value="single">Single Room</option>
                        <option value="double">Double Room</option>
                        <option value="villa">Villa</option>
                    </select>
                </div>
                <div className="form-group col-md-3  d-flex align-items-end">
                    <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Check Availability</button>
                </div>
            </div>


        </form>
    )
}

export default RoomSearch