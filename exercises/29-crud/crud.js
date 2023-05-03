!(function () {
  /**
   * You will be using the Dummy Product API. You can find the documentation here:
   * @see https://dummyjson.com/docs/products
   *
   * You will be building a Create Update Read Delete (CRUD) application.
   * You will need to make three AJAX requests using the Dummy Product API.
   *
   * 1. Make an AJAX request to get a list of products.
   *    Display the list of products in the table below.
   *    See the sample table row HTML below.
   *    Each row must have a "Delete" button.
   *
   * 2. When the user clicks on a "Delete" button,
   *    it should make an AJAX request to delete the product.
   *
   * 3. When the user fills out and submits the "Add Product" form,
   *    send an AJAX request to add the new product.
   *
   * You can use Axios if you like to solve this problem. (You will need to get the library from a CDN.)
   * You can choose to use promise or async and await.
   *
   * HINT: You might want to embed the product ID somewhere in the HTML
   * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
   *
   * Sample table row HTML:
   * @example
   * <tr>
   *   <td>1</td>
   *   <td>iPhone 9</td>
   *   <td>An apple mobile which is nothing like apple</td>
   *   <td>$549.00</td>
   *   <td>12.96</td>
   *   <td>4.69</td>
   *   <td>94</td>
   *   <td>Apple</td>
   *   <td>smartphones</td>
   *   <td>
   *     <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
   *   </td>
   * </tr>
   */
  const productForm = document.querySelector("#productForm");
  const productTableBody = document.querySelector("#productTableBody");

  const getProducts = async () => {
    try{
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      const products = data.products;

      products.forEach(product => {
      const tableRow = document.createElement('tr');

      const idCell = document.createElement('td');
      idCell.textContent = product.id;
      tableRow.appendChild(idCell);

      const titleCell = document.createElement('td');
      titleCell.textContent = product.title;
      tableRow.appendChild(titleCell);

      const descriptionCell = document.createElement('td');
      descriptionCell.textContent = product.description;
      tableRow.appendChild(descriptionCell);

      const priceCell = document.createElement('td');
      priceCell.textContent = product.price;
      tableRow.appendChild(priceCell);

      const discountPercentageCell = document.createElement('td');
      discountPercentageCell.textContent = product.discountPercentage;
      tableRow.appendChild(discountPercentageCell);

      const ratingCell = document.createElement('td');
      ratingCell.textContent = product.rating;
      tableRow.appendChild(ratingCell);

      const stockCell = document.createElement('td');
      stockCell.textContent = product.stock;
      tableRow.appendChild(stockCell);

      const brandCell = document.createElement('td');
      brandCell.textContent = product.brand;
      tableRow.appendChild(brandCell);

      const categoryCell = document.createElement('td');
      categoryCell.textContent = product.category;
      tableRow.appendChild(categoryCell);

      const actionCell = document.createElement('button');
      actionCell.textContent = 'Delete';
      actionCell.classList.add('btn', 'btn-danger', 'btn-sm', 'delete-product-btn');
      tableRow.appendChild(actionCell);

      actionCell.addEventListener('click', () => {
        deleteProduct(product.id);
        alert(`${product.title} is deleted.`);
        tableRow.remove();
      });

      productTableBody.appendChild(tableRow);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  
productForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const priceInput = document.getElementById("price");
  const discountPercentageInput = document.getElementById("discountPercentage");
  const ratingInput = document.getElementById("rating");
  const stockInput = document.getElementById("stock");
  const brandInput = document.getElementById("brand");
  const categoryInput = document.getElementById("category");

  const productData = {
    title: titleInput.value,
    description: descriptionInput.value,
    price: priceInput.value,
    discountPercentage: discountPercentageInput.value,
    rating: ratingInput.value,
    stock: stockInput.value,
    brand: brandInput.value,
    category: categoryInput.value,
  };

  try {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(productData),
    });

    const newProduct = await response.json();

    const tableRow = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = newProduct.id;
    tableRow.appendChild(idCell);

    const titleCell = document.createElement("td");
    titleCell.textContent = newProduct.title;
    tableRow.appendChild(titleCell);

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = newProduct.description;
    tableRow.appendChild(descriptionCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = newProduct.price;
    tableRow.appendChild(priceCell);

    const discountPercentageCell = document.createElement("td");
    discountPercentageCell.textContent = newProduct.discountPercentage;
    tableRow.appendChild(discountPercentageCell);

    const ratingCell = document.createElement("td");
    ratingCell.textContent = newProduct.rating;
    tableRow.appendChild(ratingCell);

    const stockCell = document.createElement("td");
    stockCell.textContent = newProduct.stock;
    tableRow.appendChild(stockCell);

    const brandCell = document.createElement("td");
    brandCell.textContent = newProduct.brand;
    tableRow.appendChild(brandCell);

    const categoryCell = document.createElement("td");
    categoryCell.textContent = newProduct.category;
    tableRow.appendChild(categoryCell);

    const actionCell = document.createElement("button");
    actionCell.textContent = "Delete";
    actionCell.classList.add(
      "btn",
      "btn-danger",
      "btn-sm",
      "delete-product-btn"
    );
    tableRow.appendChild(actionCell);

    actionCell.addEventListener("click", () => {
      deleteProduct(newProduct.id);
      alert(`${newProduct.title} is deleted.`);
      tableRow.remove();
    });

    productTableBody.insertBefore(tableRow, productTableBody.firstChild);

    productForm.reset();
  } catch (error) {
    console.error(error);
  }
});

getProducts();
})();
