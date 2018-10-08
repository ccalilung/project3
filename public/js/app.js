$(function() {

  $("#foodSubmit").on("click", function() {
    event.preventDefault();  
    let foodTerm = $("#foodTerm").val().trim();
    console.log(foodTerm)
      $.get("/api/food/" + foodTerm, (data) => {
        data.list.item.forEach(x => {
          $("#textArea").append(x.name + " USDA Nutrition Database No:" + x.ndbno + "<br>")
        })
      })
  })

$("#dbNumSubmit").on("click", function() {
  event.preventDefault();
  let dbNum = $("#dbNum").val().trim();
  let type = $("#selection").val()
  
  $.get("/api/dbnum/" + dbNum, (data) => {
    console.log(data)
    if(type === "ingredients"){
    $("#ingredientsArea").append(data.report.food.ing.desc)
    }

    if(type === "nutrients"){
      data.report.food.nutrients.forEach(x => {
        $("#ingredientsArea").append(x.name + " "+ x.value, x.unit +"<br>")
      })
    }

    })
  })




})