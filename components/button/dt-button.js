class DtButton extends HTMLElement {
    static get observedAttributes () {
        return ['disabled', 'icon', 'variant']
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.render()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'disabled' && this.shadowRoot) {
            const btn = this.shadowRoot.querySelector('button');
            if (btn) {
                btn.disabled = this.hasAttribute('disabled');
            }
        } else {
            // Se mudar icon ou variant, re-renderiza tudo
            this.render();
        }
    }

    render () {
        const iconClass = this.getAttribute('icon')
        const variant = this.getAttribute('variant') || 'normal'
        const hasText = this.innerHTML.trim() !== ''
        const isIconOnly = iconClass && !hasText
        const buttonClass =  `${variant} ${isIconOnly ? 'icon-only' : ''}`
        const isDisabled = this.hasAttribute('disabled')
        // Adiciona o CSS diretamente no shadow DOM        
        this.shadowRoot.innerHTML = `
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <style>
            :host {
            display: inline-block;
            }

            button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: var(--radius-md);
            font-family: var(--font-family-base);
            font-size: var(--font-size-md);
            cursor: pointer;
            transition: background-color 0.3s ease;
            color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /*Efeito de profundidade no botão*/
            transition: transform 0.1s ease, box-shadow 0.1s ease;
            }

            button:hover {
                box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* efeito de "subir" levemente */
            }
            
            button:active {
                transform: translateY(.8px);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* sombra mais sutil */
            }

            button:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                pointer-events: none;
            }
            
            button.icon-only {
            padding: 0.2rem;
            width: 1.75rem;
            height: 1.75rem;
            justify-content: center;
            }

            button.icon-only i {
            font-size: 0.95rem;
            }

            button.normal {
            background-color: var(--color-normal, #2563eb);
            }

            button.normal:hover {
            background-color:var(--color-normal-hover, #1d4ed8);
            }

            button.success {
            background-color: var(--color-success, #22c55e);
            }

            button.success:hover {
            background-color:var(--color-success-hover, #16a34a);
            }

            button.danger {
            background-color: var(--color-danger, #dc2626);
            }

            button.danger:hover {
            background-color: var(--color-danger-hover, #b91c1c);
            }

            button.warning {
            background-color: var(--color-warning, #eab308);
            }

            button.warning:hover {
            background-color:var(--color-warning-hover, #ca8a04);
            }

            i {
            font-size: 1rem;
            }
        </style>

        <button class="${buttonClass}" ${isDisabled ? 'disabled' : ''}>
            ${iconClass ? `<i class="${iconClass}"></i>` : ''}
            <slot></slot>
        </button>
        `   
    
        const buttonElement = this.shadowRoot.querySelector('button')
        buttonElement.addEventListener('click', (e) => {
            if (!this.hasAttribute('disabled')) {
                this.dispatchEvent(new Event('click', { bubbles: true, composed: true }));
            }
        })
    }
}

// Registra o componente customizado
customElements.define('dt-button', DtButton)
