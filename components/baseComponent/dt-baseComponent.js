class BaseComponent extends HTMLElement {
    static get observedAttributes() {
      return ['data-attr1', 'data-attr2']; // Altere conforme os atributos que quiser observar
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render(); // Primeira renderização
    }
  
    connectedCallback() {
      // Executa quando o componente é adicionado ao DOM
      // Ideal para iniciar listeners ou lógica de montagem
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      // Reage à mudança de atributos
      if (oldValue !== newValue) {
        this.render(); // Re-renderiza com novos atributos
      }
    }
  
    render() {
      const attr1 = this.getAttribute('data-attr1') || 'valor-padrão';
      const attr2 = this.getAttribute('data-attr2') || 'outro-padrão';
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: sans-serif;
          }
  
          .container {
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 0.5rem;
            background-color: #f9f9f9;
          }
  
          .highlight {
            color: red;
          }
        </style>
  
        <div class="container">
          <p>Atributo 1: <strong class="highlight">${attr1}</strong></p>
          <p>Atributo 2: <em>${attr2}</em></p>
          <slot></slot> <!-- Conteúdo externo -->
        </div>
      `;
    }
  }
  
  customElements.define('dt-basecomponent', BaseComponent);
  