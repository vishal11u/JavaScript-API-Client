async function fetchData() {
    try {
      const result = document.getElementById("result");
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      result.style.opacity = 1;
      // result.style.transform = "translateY(0)";
      if (Array.isArray(data)) {
        document.getElementById("result").innerHTML = data
          .map(
            (user) => `
            <div class="product">
              <img src="${user.image}" alt="${user.title}">
              <h3>${user.title}</h3>
              <p>ID: ${user.id}</p>
              <p>Category: ${user.category}</p>
              <p>Price: $${user.price.toFixed(2)}</p>
              <p>Rating: ${user.rating ? user.rating.rate : "N/A"}/5</p>
            </div>`
          )
          .join("");
      } else {
        document.getElementById("result").innerHTML =
          "<p>Error: Unexpected data format</p>";
      }
    } catch (error) {
      document.getElementById(
        "result"
      ).innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }

  fetchData();