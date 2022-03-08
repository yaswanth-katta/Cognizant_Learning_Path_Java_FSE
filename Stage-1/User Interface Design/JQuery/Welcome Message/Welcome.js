$('#btnId').click(function(){
    var name=$('#txt').val();
    var msg="Welcome "+name+"!";
    $('#address').html(msg);
});