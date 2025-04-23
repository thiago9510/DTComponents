class DtLayout extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        // Template com personalização
        
        this.shadowRoot.innerHTML = `
        <style>
        /* o host é o elemento raiz do shadow, a tag, a class raiz */
          :host {
            /*reset*/
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: "Poppins", sans-serif;
            }
            .primary-container {
                height: 100vh; /* altura total da tela */
                flex-direction: column;
            }

            .second-container {
                flex: 1; /* pega o resto da tela */
                display: flex;
            }

            .main {
                background-color: rgba(219, 218, 223, 0.5);
                flex: 1; /* ocupa o espaço restante */
            }
        </style>
  
        <div class="primary-container">
            <dt-navbar id="navbar-component">navbar</dt-navbar>      
            <div class="second-container">
            <dt-sidebar id="sidebar-component"></dt-sidebar> <!-- aqui entra o componente dt-sidebar -->     
                <div class="main">
                 <slot name="content"></slot> <!-- "Tudo que for filho de <dt-layout> e tiver slot="content" será renderizado aqui". -->
                </div> 
            </div>
        </div>             
        `        
    }

}

customElements.define('dt-layout', DtLayout)
