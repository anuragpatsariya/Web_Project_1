$(document).ready(function() {
    $.ajax({
        url: "http://localhost:3000/imagedata",
        type: "GET",
        dataType: "json",
        success: function(data){
            $.each(data,function(i,item){
                //alert(item);
                var v = "<li><figure> <img src=\""+item.img_path+"\" alt=\"img0"+item.img_id+"\" height=\"150\" width=\"50\"/><figcaption> <h3>"+item.img_heading+"</h3><p>"+item.img_details+"</p></figcaption> </figure></li>";
                $("#grid")[0].innerHTML +=v;
            });
        },
        Error: function(xhr, status, error) {
            window.alert("Error: " + xhr.status + status + error);
        }
    });
});