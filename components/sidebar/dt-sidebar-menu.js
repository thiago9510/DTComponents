const userPermissions = ["VIEW_CART", "VIEW_STORE"]

const menuItems = [
    { label: "Cart", icon: "fa-cart-shopping", href: "pages/cart.html" },
    { label: "Store", icon: "fa-store", href: "/store" },
    { label: "Admin", icon: "fa-user-shield", href: "pages/admin.html" },
]

const visibleItems = menuItems.filter(item =>
    userPermissions.includes(item.permission)
  );