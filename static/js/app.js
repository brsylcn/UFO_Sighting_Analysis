var ufo_table = data; //---> Variable aciyoruz ve data ya esitliyoruz

var tb = d3.select("tbody"); //---> tbody den "d3" methoduyla data lari cekiyoruz

ufo_table.forEach((spacedata) => {
  var row = tb.append("tr");
  Object.values(spacedata).forEach((v) => {
    var cell = row.append("td");
    cell.text(v);
  });
});

var button = d3.select("#filter-btn");

button.on("click", function () {
  
  var input_element = d3.select("#datetime");

  var input_value = input_element.property("value");
  let input_city = d3.select("#city").property("value");
  let input_state = d3.select("#state").property("value");
  let input_country = d3.select("#country").property("value");
  let input_shape = d3.select("#shape").property("value");

  d3.select("tbody").selectAll("tr").remove();

  let filter_table = ufo_table;
  
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

  filter_table.forEach((spacedata) => {
    var row = tb.append("tr");
    Object.values(spacedata).forEach(v => {
      var cell = row.append("td");
      cell.text(v);    
    });
  });
});
