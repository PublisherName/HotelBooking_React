import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import Container from '#components/Container';
import LoadingSpinner from '#utils/LoadingSpinner';

import { BookingInterface } from '#interfaces/Booking';
import { BASE_URL } from '#config';

type RouteParams = {
    id: string;
};


function Index() {
    const [bookingDetails, setBookingDetails] = useState<BookingInterface | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams<RouteParams>();

    useEffect(() => {
        axios.get<BookingInterface>(`${BASE_URL}/Booking/GetById/${id}`)
            .then(response => {
                setBookingDetails(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <Container heading=" ">

            {isLoading ? (
                <LoadingSpinner />
            ) : bookingDetails ? (
                <div style={{ maxWidth: '600px', margin: '0 auto', border: '1px solid #ddd', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', backgroundColor: '#f8f9fa' }}>
                    <h1 style={{ textAlign: 'center', color: '#6c757d', marginBottom: '20px' }}>Booking Receipt</h1>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <p><strong>Receipt ID:</strong></p>
                        <p>{bookingDetails.id}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <p><strong>Room ID:</strong></p>
                        <p>{bookingDetails.roomId}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <p><strong>Guest Name:</strong></p>
                        <p>{bookingDetails.guestName}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <p><strong>Arrival Date:</strong></p>
                        <p>{new Date(bookingDetails.arrivalDate).toLocaleDateString()}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <p><strong>Departure Date:</strong></p>
                        <p>{new Date(bookingDetails.departureDate).toLocaleDateString()}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <p><strong>Number of Nights:</strong></p>
                        <p>{bookingDetails.numberOfNights}</p>
                    </div>
                    <hr />
                    <p style={{ textAlign: 'center', color: '#6c757d' }}><strong>Thank you for your booking!</strong></p>
                    <Link to="/" style={{ display: 'block', textAlign: 'center', marginTop: '20px', textDecoration: 'none', padding: '10px', color: '#fff', backgroundColor: '#6c757d', borderRadius: '5px' }}>Go to Home Page</Link>
                </div>
            ) : (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
                    <div className="alert alert-warning" role="alert">
                        No booking record found.
                    </div>
                </div>
            )}
        </Container >
    );
}

export default Index;