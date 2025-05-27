import users from "./users.js"

const formatDate = (date) => date.toLocaleDateString();
const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

const userContainer = document.getElementById("user-profile");
userContainer.classList.add("columns", "is-multiline");

users.forEach(user => {
    const latestOrder = user.orders[user.orders.length - 1];
    const cardHTML = `
    <div class="column is-4">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            ${user.name.firstName} ${user.name.lastName}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Balance:</strong> ${formatCurrency(user.balance)}</p>
            <p><strong>Last Login:</strong> ${formatDate(user.lastLogin)}</p>
            <p><strong>Orders:</strong> ${user.orders.length}</p>
            <p><strong>Latest:</strong> ${latestOrder.product} (${formatDate(latestOrder.date)})</p>
            <div class="tags mt-2">
              ${user.preferences.favoriteCategories.map(cat => `
                <span class="tag is-info is-light">${cat}</span>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
    userContainer.innerHTML += cardHTML;
});
