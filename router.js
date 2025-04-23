const routes = {
  "#/home": { page: "pages/home.html", layout: "main" },
  "#/cart": { page: "pages/cart.html", layout: "main" },
  "#/admin": { page: "pages/admin.html", layout: "admin" },
  "#/login": { page: "pages/login.html", layout: null }, // sem layout
}

async function loadRoute() {
  const hash = window.location.hash || "#/home"
  const route = routes[hash]

  const appElement = document.querySelector("#app")
  if (!route) {
    appElement.innerHTML = "<h2>Página não encontrada</h2>"
    return
  }

  const res = await fetch(route.page)
  const html = await res.text()

  // serve para verificar o layout usado na página
  if (route.layout === "main") {
    const layout = document.createElement("dt-layout")
    const slot = document.createElement("div")
    slot.setAttribute("slot", "content") //"Eu quero que esta <div> seja o conteúdo do slot content do <dt-layout>."
    slot.innerHTML = html
    layout.appendChild(slot)
    appElement.innerHTML = ""
    appElement.appendChild(layout)

  } else if (route.layout === "admin") {
    // Aqui você pode criar outro layout
    // const layout = document.createElement("admin-layout")
    // ...
  } else {
    // Sem layout
    appElement.innerHTML = html
  }
}

window.addEventListener("hashchange", loadRoute)
window.addEventListener("DOMContentLoaded", loadRoute)
