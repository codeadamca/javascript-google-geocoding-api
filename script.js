
let key = '<GOOGLE_GEOCODING_MAPS_API>';

let address = document.getElementById('address');
let results = document.getElementById('results');
let submit = document.getElementById('submit');

submit.addEventListener('click', function(){

    let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address.value + '&key=' + key;

    fetch(url).then(function (response) {
        
        return response.json();

    }).then(function (data) {

        console.log(data);
        
        results.innerHTML = 'Address: ' + data.results[0].formatted_address + 
            '<br>' + 
            'Place ID: ' + data.results[0].place_id + 
            '<br>' + 
            'Place ID: ' + data.results[0].place_id + 
            '<br>' + 
            'Geocode: ' + data.results[0].geometry.location.lat + ', ' + data.results[0].geometry.location.lng + 
            '<br>' + 
            '<img src="https://maps.googleapis.com/maps/api/staticmap?center=' + 
                data.results[0].geometry.location.lat + ', ' + 
                data.results[0].geometry.location.lng + 
                '&zoom=12&size=800x400&key=<GOOGLE_STATIC_MAPS_API>">';

    }).catch(function (err) {
        
        console.warn('Something went wrong.', err);

    });

});