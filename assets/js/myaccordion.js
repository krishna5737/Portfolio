var currentOpenTab = 0;
$("#panel-" + currentOpenTab).show();
$(".job-content button").click(function(event){
    let id = event.currentTarget.id.split("tab-")[1];
    $(`#panel-${currentOpenTab}`).hide();
    $(`#panel-${id}`).show();
    currentOpenTab = id;
})