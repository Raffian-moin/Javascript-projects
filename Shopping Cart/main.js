let cartItems = 0;
let itemDiv = document.querySelector("#item_card");
let viewCart = document.querySelector("#view_cart");
let cart = document.querySelector("tbody");
items = {}

itemDiv.addEventListener("click", function (event) {
    if (event.target.getAttribute("data-element") === "add-cart") {
        cartItems += 1;
        viewCart.text = `${cartItems} item(s) in cart`;
        let itemId = event.target.getAttribute("data-item-id");
        if (itemId in items) {
            items[itemId].product_count +=1;

        } else {
            parentElement = event.target.closest(".card-body");
            productName = parentElement.querySelector("#card-title").textContent;
            price = event.target.getAttribute("data-price")
            items[itemId] = {
                product_count: 1,
                product_title: productName,
                product_price: price,
            };
        }
    }
})

viewCart.addEventListener("click", function (event) {
    // console.log(items);
    let totalPrice = 0;
  cart.innerHTML = "";
  for (const key in items) {
    let subTotal = parseFloat((items[key].product_count * items[key].product_price).toFixed(2));
    totalPrice += subTotal;
    cart.insertAdjacentHTML(
      "beforeend",
      `<tr id="${key}">
            <td>${items[key].product_title}</td>
            <td><input type="number" data-product-id=${key} class="form-control" min="1" value="${items[key].product_count}" id="exampleFormControlInput1"></td>
            <td><button type="button" class="close-button my-class" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button></td>
            <td id="sub-total">${subTotal}</td>
        </tr>`
    );
  }

  let totalPriceElement = document.querySelector("table")
  totalPriceElement.insertAdjacentHTML("afterend", `<p>Total Price: ${totalPrice}</p>`)
});

cart.addEventListener("change", function (event) {
    let product = items[event.target.getAttribute("data-product-id")];
    product.product_count = parseInt(event.target.value);
    parentElement = event.target.closest("tr");
    parentElement.querySelector("#sub-total").textContent = (event.target.value * product.product_price).toFixed(2);
    // console.log(items);
})

document.querySelector("tbody").addEventListener("click", function (event) {
    if (
      event.target.classList.contains("close-button") ||
      event.target.closest("button").classList.contains("close-button")
    ) {
       let row = document.querySelector(".close-button").closest("tr");
       delete items[row.id];
       row.remove();
    }
})
