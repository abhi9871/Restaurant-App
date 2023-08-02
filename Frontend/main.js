// Get the todo form element by the id
const restaurant = document.getElementById('restaurant');

// Get the table1 order list ul element by the id
let table1 = document.getElementById('table1');

// Get the table2 order list ul element by the id
let table2 = document.getElementById('table2');

// Get the table3 order list ul element by the id
let table3 = document.getElementById('table3');

// Add an event listener to a restaurant form
restaurant.addEventListener('submit', orders);

async function orders(e) {
    e.preventDefault();  // Prevent form submission to avoid page refresh
    let price = document.getElementById('price');
    let dish = document.getElementById('dish');
    let table = document.getElementById('table');

    // Create a restaurant form data object
    const restaurantData = {
        price: price.value,
        dish: dish.value,
        table: table.value
    }

    // Create an order
    createOrder(restaurantData);

    restaurant.reset();
}

    // Show orders on the screen
    function displayOrder(orderData) {
        // create a new list
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item fs-5';
        listItem.appendChild(document.createTextNode(`\u20B9${orderData.price} - ${orderData.dish} - ${orderData.table}`));

        // Add a delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-secondary btn-sm p-2 mx-2';
        deleteBtn.appendChild(document.createTextNode('Delete Order'));
        listItem.appendChild(deleteBtn);

        // add an event listener to deleteBtn to delete the order
        deleteBtn.addEventListener('click', (e) => {
            let listItem = e.target.parentElement;
            let parentList = listItem.parentElement;
            parentList.removeChild(listItem);
            deleteOrder(orderData.id);
        })

        if(orderData.table === 'table1') {
            table1.appendChild(listItem);
        }
        else if(orderData.table === 'table2') {
            table2.appendChild(listItem);
        }
        else {
            table3.appendChild(listItem);
        }
    }

    // get all the orders
    async function getOrders() {
        try {
           const items = await axios.get('http://localhost:4000/get-orders') ;
           const todoItems = items.data;
           todoItems.forEach(item => {
                displayOrder(item);
           });
        } catch (err) {
            console.log(err);
        }
    }

    // create an order
    async function createOrder(orderData) {
         try {
            const item = await axios.post('http://localhost:4000/create-order', orderData);
            console.log(item.data);
            displayOrder(item.data);
         } catch (err) {
            console.log(err);
         }
    }

    // delete an order
    async function deleteOrder(orderId) {
        try {
          const deleteItem = await axios.delete(`http://localhost:4000/delete-order/${orderId}`);  
          console.log(`Item deleted: ${JSON.stringify(deleteItem.data)}`);
        } catch (err) {
            console.log(err);
        }
    }

    // show orders on onload
    window.addEventListener('DOMContentLoaded', getOrders);