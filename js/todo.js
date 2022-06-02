// Add todo div elements
var btn_add = $(".add");
var btn_save =$(".save-btn");
//Single todo elements
var single_todo = $(".one-todo");
var isDone = $(".check").is(':checked');
var desc_td = $(".desc-td");
var date_td = $(".date-td");
var point_td = $(".point-td");
var delete_li = $(".delete")
var data = [];
var current_li = 0;
var id = 0;
btn_add.click(function(){
    // Get Date
    var createdAt = new Date;
    // createdAt = String(createdAt.getDate()).padStart(2,0) + '/' + String(createdAt.getMonth()+1).padStart(2,0) + "/" +createdAt.getFullYear();
    console.log(createdAt);

    // Generate random id
    id = Math.floor(Math.random()*1000);
    console.log(id);

    // Data of current li
    var current_li_data = [createdAt,id,$("#title").val(),$("#desc").val(),$("#point").val(),current_li]
    data.push(current_li_data);
    // Append new li
    $('ul').append('<li class="one-todo" id="'+data[current_li][1]+'">'
    +'<span class="title-td">'+data[current_li][2]+'</span>'
    +'<br> <br> <div> <input type="radio" class="check-td">'
    +'<span class="desc-td">'+data[current_li][3]+'</span>'
    +'<span class="delete"><i class="fa-solid fa-trash-can" data="'+data[current_li][1]+'"></i></span>'
    +'<span class="delete"><i class="fa-solid fa-pen" id="'+current_li+'"></i></span>'
    // +'<span class="date-td">'+createdAt+'</span>'
    +'<span class="point-td">'+data[current_li][4]+'</span>'
    +'</li>');
    $("#title").val("");
    $("#desc").val("");
    $("#point").val("");
    current_li++;
    console.log(data)
});

//Delete li
$('ul').on('click', '.fa-trash-can',function(){
    console.log($("#"+$(this).attr('data')).val());
    data.splice($("#"+$(this).attr('data')),1)
    $("#"+$(this).attr('data')).remove();
    console.log(data)
});

//Update li
$('ul').on('click', '.fa-pen',function(){
    var li =this.id
    $("#title").val(""+data[this.id][2]);
    $("#desc").val(""+data[this.id][3]);
    $("#point").val(""+data[this.id][4]);
    btn_add.css("visibility","hidden");
    btn_save.css("visibility","visible");

    // On Save
    btn_save.click({param: li}, update)
    function update(event){
    event.data.param

    $("#"+data[event.data.param][1]).remove();
    // Data of current li
    data[event.data.param][2] = $("#title").val()
    data[event.data.param][3] = $("#desc").val()
    data[event.data.param][4] = $("#point").val();
    //Append new li
    $('ul').append('<li class="one-todo" id="'+data[event.data.param][1]+'">'
    +'<span class="title-td">'+data[event.data.param][2]+'</span>'
    +'<br> <br> <div> <input type="radio" class="check-td">'
    +'<span class="desc-td">'+data[event.data.param][3]+'</span>'
    +'<span class="delete"><i class="fa-solid fa-trash-can" data="'+data[event.data.param][1]+'"></i></span>'
    +'<span class="delete"><i class="fa-solid fa-pen" id="'+event.data.param+'"></i></span>'
    // +'<span class="date-td">'+createdAt+'</span>'
    +'<span class="point-td">'+data[event.data.param][4]+'</span>'
    +'</li>');
    $("#title").val("");
    $("#desc").val("");
    $("#point").val("");
    console.log(data)
    btn_add.css("visibility","visible");
    btn_save.css("visibility","hidden");
    }
});


