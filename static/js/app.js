var ufo_table = data; //---> Variable aciyoruz ve data ya esitliyoruz

var tb = d3.select("tbody"); //---> tbody den "d3" methoduyla referans aliyoruz

ufo_table.forEach((spacedata) => {
  var row = tb.append("tr");
  Object.values(spacedata).forEach((v) => {
    var cell = row.append("td");
    cell.text(v);
  });
});

var button = d3.select("#filter-btn"); //---> tusu seciyoruz

button.on("click", function () { //---> fonksiyon deklare ediyoruz
  
  var input_element = d3.select("#datetime");

  var input_value = input_element.property("value");
  let input_city = d3.select("#city").property("value");
  let input_state = d3.select("#state").property("value");
  let input_country = d3.select("#country").property("value");
  let input_shape = d3.select("#shape").property("value");

  d3.select("tbody").selectAll("tr").remove(); ///---> I am not sure if it is ok here!!!

  let filter_table = ufo_table; ///--->null datalari almamak icin fikir olusturuyoruz
  
  if (input_value !== "") {
    filter_table = ufo_table.filter(row_data => row_data.datetime === input_value);
  };
  if (input_city !== "") {
    filter_table = filter_table.filter(row_data => row_data.city === input_city);
  }
  if (input_state !== "") {
    filter_table = filter_table.filter(row_data => row_data.state === input_state);
  }
  if (input_country !== "") {
    filter_table = filter_table.filter(row_data => row_data.country === input_country);
  }
  if (input_shape !== "") {
    filter_table = filter_table.filter(row_data => row_data.shape === input_shape);
  }

  // This one did not work and I am too lazy to fix it now!!!
  
  /*function chooseTable(filter_table) {
    var filter_table = "";
    switch(filter_table) {
      case (input_value !== ""):
        ufo_table.filter(row_data => row_data.datetime === input_value);
        break;
      case (input_city !== ""):
        filter_table = filter_table.filter(row_data => row_data.city === input_city);
        break;
      case (input_state !== ""):
        filter_table = filter_table.filter(row_data => row_data.state === input_state);
        break;
      case (input_country !== ""):
        filter_table = filter_table.filter(row_data => row_data.country === input_country);
        break;
      case (input_shape !== ""):
        filter_table = filter_table.filter(row_data => row_data.shape === input_state);
        break;
      }*/

  filter_table.forEach((spacedata) => {  ///---> filtreledigimiz datalari tabloya gonderiyoruz
    var row = tb.append("tr");
    Object.values(spacedata).forEach(v => {
      var cell = row.append("td");
      cell.text(v);    
    });
  });
});


function init() {
  tb.html("")
  ufo_table.forEach((spacedata) => {
    var row = tb.append("tr");
    Object.values(spacedata).forEach((v) => {
      var cell = row.append("td");
      cell.text(v);
    });
  });
  }
  
init()