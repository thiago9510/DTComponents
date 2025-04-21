class DtNavabar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open" })
        this.shadowRoot.innerHTML = `
            <style>               
                .navbar {
                    background-color: var(--color-primary, #2563eb);
                    width: 100%;
                    height: 60px;
                }
            </style>            
            <div class = "navbar">
                <slot></slot>
            </div>
        `
    }    
}
customElements.define('dt-navbar', DtNavabar)