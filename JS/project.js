function checkmob() {
    let str = document.getElementById("mobile").value;
    let chck = ptr.test(str);

    if (!chck)
        alert("Mobile Number is Incorrect");
}

function createBill() {
    let items = [];
    let quantities = [];
    let prices = [];
    let totalAmount = 0;

    for (let i = 1; i <= 4; i++) {
        let item = document.getElementById("item" + i).value;
        let quantity = parseInt(document.getElementById("q" + i).value);

        if (item !== "1" && quantity > 0) {
            let price = parseFloat(item).toFixed(2);
            let totalPrice = (price * quantity).toFixed(2);

            items.push("Item " + i);
            quantities.push(quantity);
            prices.push(price);
            totalAmount += parseFloat(totalPrice);
        }
    }

    let billTable = document.getElementById("billTable");
    let totalAmountElement = document.getElementById("totalAmount");

    if (items.length > 0) {
        billTable.style.display = "table";
        totalAmountElement.style.display = "block";
        billTable.innerHTML = "<tr><th>ITEMS</th><th>-QUANTITY</th><th>-PRICE</th><th>-TOTAL</th></tr>";

        for (let j = 0; j < items.length; j++) {
            let itemRow = "<tr><td>" + items[j] + "</td><td>" + quantities[j] + "</td><td>" + prices[j] + "</td><td>" + (quantities[j] * prices[j]).toFixed(2) + "</td></tr>";
            billTable.innerHTML += itemRow;
        }

        totalAmountElement.innerHTML = "Total Amount: Rs. " + totalAmount.toFixed(2);
    } else {
        billTable.style.display = "none";
        totalAmountElement.style.display = "none";
    }
}