var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
};

var elementName = document.getElementById('hotelName');
elementName.textContent = hotel.name;

var elementRooms = document.getElementById('rooms');
elementRooms.textContent = hotel.checkAvailability();
