// Add todo div elements
var btn_add = $(".add");
var btn_save =$(".save-btn");
//Single todo elements
var single_todo = $(".one-todo");
var isDone = $(".check").is(':checked');
var desc_td = $(".desc-td");
var date_td = $(".date-td");
var point_td = $(".point-td");
var delete_li = $(".delete");
var radio = $(".check-td")
var current_li = parseInt(localStorage.getItem('count'));
console.log(current_li+3)
var id = 0;
var all_li=[];
var isEmpty = JSON.parse(localStorage.getItem('lis'));
console.log(isEmpty)
if(isEmpty==null){
    var newlilcl=[];
    var newli=[];
    var data=[];
    var current_li = 0
    localStorage.setItem('lis',JSON.stringify(newli))
    localStorage.setItem("count", current_li)
    localStorage.setItem('data',JSON.stringify(data));
    console.log('here')
}
else{
    var newlilcl=[]
    var newli=[]
    var data=[]
    var dat= JSON.parse(localStorage.getItem('data'));
    for(let i=0; i<isEmpty.length; i++){
        newli.push(isEmpty[i])
        newlilcl.push(isEmpty[i])
        $('ul').append(isEmpty[i]);
        data.push(dat[i])
    }
}
console.log(newlilcl)
btn_add.click(function(){
    // Get Date
    var createdAt = new Date;
    // createdAt = String(createdAt.getDate()).padStart(2,0) + '/' + String(createdAt.getMonth()+1).padStart(2,0) + "/" +createdAt.getFullYear();
    console.log(createdAt);

    // Generate random id
    id = Math.floor(Math.random()*1000);
    console.log(id);

    // Data of current li
    var current_li_data = ["0",id,$("#title").val(),$("#desc").val(),$("#point").val(),current_li]
    data.push(current_li_data);
    newlilcl.push( '<li class="one-todo" id="'+data[current_li][1]+'">'
    +'<span class="title-td">'+data[current_li][2]+'</span>'
    +'<br> <br> <div> <input type="checkbox" id="'+current_li+'" class="check-td">'
    +'<span class="desc-td">'+data[current_li][3]+'</span>'
    +'<span class="delete"><i class="fa-solid fa-trash-can" data="'+data[current_li][1]+'"></i></span>'
    +'<span class="delete"><i class="fa-solid fa-pen" id="'+current_li+'"></i></span>'
    // +'<span class="date-td">'+createdAt+'</span>'
    +'<span class="point-td">'+data[current_li][4]+'</span>'
    +'</li>')
    // Append new li
    $('ul').append(newlilcl[current_li]);
    $("#title").val("");
    $("#desc").val("");
    $("#point").val("");
    current_li++;
    console.log(data)
    all_li.push(newli);
    newli = newlilcl
    localStorage.setItem("lis", JSON.stringify(newli));
    localStorage.setItem("count", current_li);
    localStorage.setItem('data',JSON.stringify(data));
});

//Delete li
$('ul').on('click', '.fa-trash-can',function(){
    console.log($("#"+$(this).attr('data')).val());
    data.splice($("#"+$(this).attr('data')),1)
    newlilcl.splice($("#"+$(this).attr('data')),1)
    $("#"+$(this).attr('data')).remove();
    console.log(data)
    localStorage.setItem('data',JSON.stringify(data));
    current_li--;
    localStorage.setItem("count", current_li);
    localStorage.setItem("lis", JSON.stringify(newlilcl));

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
    +'<br> <br> <div> <input type="checkbox" class="check-td">'
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

//Search
$("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("ul li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

//Todo Done
$('ul').on('click', '.check-td',function(){ 
    if(this.checked){
        ($(this).parent()).parent().css('background-color','#838383');
    }
    else{
    ($(this).parent()).parent().css('background-color','#white');
    }
 });