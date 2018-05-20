var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77
};

hotel.pool = false;
hotel.gym = true;
delete hotel.booked;

var elementName = document.getElementById('hotelName');
elementName.textContent = hotel.name;

var elementPool = document.getElementById('pool');
elementPool.className = hotel.pool;

var elementGym = document.getElementById('gym');
elementGym.className = hotel.gym;
