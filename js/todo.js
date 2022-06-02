// Add todo div elements

var btn_add = $(".add-btn");
//Single todo elements
var single_todo = $(".one-todo");
var isDone = $(".check").is(':checked');
var desc_td = $(".desc-td");
var date_td = $(".date-td");
var point_td = $(".point-td");

var id = 0;
cuurent_todo = 1;
$(".add").click(function(){
    var title = $("#title").val();
    var desc = $("#desc").val();
    var priority = $("#point").val();
    // Get Date
    var createdAt = new Date;
    createdAt = String(createdAt.getDate()).padStart(2,0) + '/' + String(createdAt.getMonth()+1).padStart(2,0) + "/" +createdAt.getFullYear();
    console.log(createdAt);
    // Generate random id
    id = Math.floor(Math.random()*1000);
    console.log(id);
    // 
    $('ul').append('<li class="one-todo">'
    +'<span class="title-td">'+title+'</span>'
    +'<br> <br> <div> <input type="radio" class="check-td">'
    +'<span class="desc-td">'+desc+'</span>'
    +'<span class="date-td">'+createdAt+'</span>'
    +'<span class="point-td">'+priority+'</span>'
    +'</li>');
});