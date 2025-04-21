class DtSidebar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        // componente com "Shadow DOM
        // 🔒 Encapsula tudo internamente:
        // O HTML e CSS ficam isolados do resto da página.
        // O estilo da página não afeta o componente.
        // O componente não afeta o que está fora dele.
        // Ideal para componentes reutilizáveis e consistentes (layout, UI, botão, card, etc).

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <style>               
                .sidebar {
                    height: 100vh;
                    position: relative;
                    justify-content: space-between;    
                    width: 60px;
                    transition: width 0.3s ease;
                }

                .side-items {
                    padding: 10px;                    
                }

                .side-item {
                    padding: 10px;
                    border-radius: 8px;
                    transition: background-color 0.3s ease;
                    cursor: pointer;                    
                }

                .side-item.active {
                    background-color: var(--color-primary, #2563eb);
                    color: white;
                    gap: 14px;         
                }

                .side-item:hover:not(.active) {
                    background-color: var(--color-primary-hover, #e3e9f7);                    
                }

                .side-item a {
                    text-decoration: none;
                    color: #0a0a0a;
                    display: flex;
                    align-items: center;
                }

                .side-item.active a {
                    color: #e3e9f7;
                }

                .side-item a i {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 20px;
                    height: 20px;
                }

                .item-description {
                    transform: translateX(-10px);
                    transition: all 0.3s ease;
                    width: 0px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 14px;
                    height: 0px;
                }

                .sidebar.open-sidebar {
                    width: 250px;    
                }

                .sidebar.open-sidebar .item-description {
                    min-width: 150px;
                    height: auto;
                }

                .sidebar.open-sidebar .side-item a {
                    justify-content: flex-start;
                    gap: 14px;
                }
            </style>

            <div class="sidebar">                
                <div class="side-items">
                <div class="side-item">                       
                    <a href="#" id="menu">                            
                    <i class="fa-solid fa-bars"></i>                           
                    <span class="item-description">Menu</span>
                    </a>
                </div>

                <div class="side-item">
                    <a href="#">
                    <i class="fa-solid fa-cart-shopping"></i>                                                 
                    <span class="item-description">Cart</span>
                    </a>
                </div>

                <div class="side-item">
                    <a href="#">
                    <i class="fa-solid fa-store"></i>
                    <span class="item-description">Store</span>
                    </a>
                </div>
                </div>
            </div>        
        `        
    }

    connectedCallback() {
        const sidebar = this.shadowRoot.querySelector('.sidebar')
        const menuButton = this.shadowRoot.querySelector('#menu')
        const items = this.shadowRoot.querySelectorAll('.side-item')

        menuButton.addEventListener('click', () => {
            sidebar.classList.toggle('open-sidebar')
        });

        items.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                items.forEach(i => i.classList.remove('active'))
                item.classList.add('active')
            })
        })
    }
}
customElements.define('dt-sidebar', DtSidebar)