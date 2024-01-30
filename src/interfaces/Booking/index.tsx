export interface BookingInterface {
    id: number;
    roomId: number;
    guestName: string;
    guestId: number;
    arrivalDate: string;
    departureDate: string;
    numberOfNights: number;
    status: number;
}