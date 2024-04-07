$(document).ready(function() {
    
    function get_selected_amenities() {
        var selected_amenities = [];
        $(".amenities ul input:checked").each(function() {
            var amenity_id = $(this).data("id");
            var amenity_name = $(this).data("name");
            selected_amenities.push({ id: amenity_id, name: amenity_name });
        });
        return selected_amenities;
    }
    
    $(".amenities ul input").change(function (e) {
        var amenity_id = $(this).data("id");
        var amenity_name = $(this).data("name");
        var amenities = get_selected_amenities();
        var names = [];
        console.log(amenities)
        amenities.forEach(function (amenity) {
            names.push(amenity.name);
        });
        $(".amenities h4").text(names.join(", "));
    });
    
});
