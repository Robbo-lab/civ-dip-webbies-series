import users from "./users.js"

const formatDate = (date) => date.toLocaleDateString();
const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

users.forEach(function (user) {
  const renderUserProfile = () => {
    return `
      <div class="box">
        <h2 class="title is-4">Personal Information</h2>
        <div class="content">
          <p><strong>ID:</strong> ${user.id}</p>
          <p><strong>Name:</strong> ${user.name.firstName} ${user.name.lastName}</p>
          <p><strong>Age:</strong> ${user.age}</p>
          <p><strong>Balance:</strong> ${formatCurrency(user.balance)}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.postalCode}</p>
          <p><strong>Join Date:</strong> ${formatDate(user.joinDate)}</p>
          <p><strong>Last Login:</strong> ${formatDate(user.lastLogin)}</p>
        </div>
      </div>

      <div class="box">
        <h2 class="title is-4">Orders</h2>
        <div class="content">
          ${user.orders.map(order => `
            <div class="card mb-4">
              <div class="card-content">
                <div class="content">
                  <p><strong>Order ID:</strong> ${order.orderId}</p>
                  <p><strong>Product:</strong> ${order.product}</p>
                  <p><strong>Quantity:</strong> ${order.quantity}</p>
                  <p><strong>Price:</strong> ${formatCurrency(order.price)}</p>
                  <p><strong>Date:</strong> ${formatDate(order.date)}</p>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="box">
        <h2 class="title is-4">Preferences</h2>
        <div class="content">
          <p><strong>Newsletter:</strong> ${user.preferences.newsletter ? "Subscribed" : "Not Subscribed"}</p>
          <p><strong>Email Notifications:</strong> ${user.preferences.notifications.email ? "Enabled" : "Disabled"}</p>
          <p><strong>SMS Notifications:</strong> ${user.preferences.notifications.sms ? "Enabled" : "Disabled"}</p>
          <p><strong>Favorite Categories:</strong></p>
          <div class="tags">
            ${user.preferences.favoriteCategories.map(cat => `
              <span class="tag is-info is-light">${cat}</span>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="box">
        <h2 class="title is-4">Account</h2>
        <div class="content">
          <p><strong>Login Attempts:</strong> ${user.loginAttempts}</p>
          <p><strong>Referral:</strong> ${user.referral ? user.referral : "No referral"}</p>
        </div>
      </div>
    `;
  };

  document.getElementById("user-profile").innerHTML += renderUserProfile();
});
