
let items = [];

function addItem() {
  
  const itemName = document.getElementById('itemName').value;
  const description = document.getElementById('description').value;
  const price = parseFloat(document.getElementById('price').value);
  const quantity = parseInt(document.getElementById('quantity').value);

  
  const item = {
    itemName: itemName,
    description: description,
    price: price,
    quantity: quantity
  };

  items.push(item);

  
  document.getElementById('itemName').value = '';
  document.getElementById('description').value = '';
  document.getElementById('price').value = '';
  document.getElementById('quantity').value = '';

  displayItems();
}

function displayItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    const itemHTML = `
      <div class="item">
        <p><strong>Name:</strong> ${item.itemName}</p>
        <p><strong>Description:</strong> ${item.description}</p>
        <p><strong>Price:</strong> ${item.price}</p>
        <p><strong>Quantity:</strong> ${item.quantity}</p>
      </div>
    `;

    itemList.innerHTML += itemHTML;
  }
}
