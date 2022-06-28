var thead = document.getElementById("vendingtable");
var money = document.getElementById("money");
var usermoney = 1000;
var lists = [
  { name: "coke", price: "100", no_of_items: "10" },
  { name: "pepsi", price: "200", no_of_items: "20" },
  { name: "milk tea", price: "300", no_of_items: "30" },
  { name: "orange juice", price: "350", no_of_items: "35" },
  { name: "coffee", price: "400", no_of_items: "2" },
];
render();
function render() {
  var tablerow = "";
  for (let a = 0; a < lists.length; a++) {
    tablerow += generateTableTow(lists[a]);
  }
  thead.innerHTML = tablerow;
}
money.innerHTML = usermoney;
//
function generateTableTow(obj) {
  return `<tr>
    <td>
        ${obj.name}
    </td>
    <td>
        ${obj.price}
    </td>
    <td>
        ${obj.no_of_items}
    </td>
</tr>`;
}

var mybtn = document.getElementById("my-btn");

mybtn.addEventListener("click", () => {
  var products = document.getElementById("brands");
  var productsvalue = products.value;
  var noi = document.getElementById("nmb");
  var noivalue = noi.value;
  if (productsvalue == 0) {
    alert("Take the product");
    return;
  }
  if (noivalue == 0 || noivalue == "") {
    alert("Please take what you want");
    return;
  }
  for (let b = 0; b < lists.length; b++) {
    if (lists[b].name.toUpperCase() == productsvalue.toUpperCase()) {
      if (lists[b].no_of_items < noivalue) {
        alert("We don't have enough ammount for this item!");
        return;
      }
      if(lists[b].price * productsvalue < usermoney){
        alert("your money is low!");
        return;
      }
      usermoney = usermoney - lists[b].price * productsvalue;
      document.getElementById('money').innerHTML = usermoney;
      lists[b].no_of_items = noivalue - lists[b].no_of_items;
      render();
    }
  }
});
