$(document).ready(function() {
    //$('#myModal').modal();
    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').focus();
    });
    $.ajax({
        url: "http://localhost:3000/imagedata",
        type: "GET",
        dataType: "json",
        success: function(data) {
            $.each(data, function(i, item) {
                //alert(item);
                var v = "<li><figure> <img src=\"" + item.img_path + "\" alt=\"img0" + item.img_id + "\" height=\"150\" width=\"50\"/><figcaption> <h3>" + item.img_heading + "</h3><p>" + item.img_details + "</p></figcaption> </figure></li>";
                $("#grid")[0].innerHTML += v;
            });
        },
        Error: function(xhr, status, error) {
            window.alert("Error: " + xhr.status + status + error);
        }
    });
});

var file_path_name;
var imgheading;
var imgdetails;
function uploadimg() {
    var data = new FormData();
    //console.log(data.dataType);
    //console.log(data.type);
    $.each($('#imgfile')[0].files, function(i, file) {
        
        data.append("userphoto",file);
    });
    $.ajax({
    url: 'api/photo',
    data: data,
    cache: false,
    contentType: false,
    processData: false,
    type: 'POST',
    success: function(data){
    file_path_name = data;
    console.log(file_path_name);
    imgheading = $("#imgheading").val();
    imgdetails = $("#imgdetails").val();
    console.log(file_path_name,imgheading,imgdetails);
    }
});
}

function uploadRecord(){
    console.log(file_path_name,imgheading,imgdetails);
    $.ajax({
        url: "http://localhost:3000/imagedata",
        type: "POST",
        data: {"img_path":file_path_name,"img_heading":imgheading,"img_details":imgdetails},
        dataType: "JSON",
        success: function(data) {
          var text =   "<li><figure> <img src=\"" + file_path_name + "\" alt=\"img0" + "" + "\" height=\"150\" width=\"50\"/><figcaption> <h3>" + imgheading + "</h3><p>" + imgdetails + "</p></figcaption> </figure></li>";
          $("#grid")[0].innerHTML += text;
        },
        error: function(xhr, status, error) {
            window.alert("Error: " + xhr.status + status + error);
        }
    });
} 