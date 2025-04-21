# Documentação do Componente DtButton

#### Descrição

##### O DtButton é um componente personalizado de botão criado usando Web Components. Ele oferece suporte a diferentes variantes de estilo e pode ser utilizado com ou sem texto, podendo incluir um ícone. O componente possui um comportamento interativo, com animações e transições de hover e clique, proporcionando uma boa experiência de usuário.

#### Estrutura de Diretórios
``` components/dt-button/dt-button.js ```

#### Atributos

##### O componente DtButton suporta os seguintes atributos:
1 - icon: (opcional) Define um ícone para o botão, utilizando as classes do Font Awesome. Exemplo: "fas fa-trash".

2 - variant: (opcional) Define a variante de estilo do botão. Os valores possíveis são:

normal (default)

success

danger

warning

A cor de fundo do botão será alterada de acordo com o valor do atributo variant.

#### Estilos

##### Os estilos são aplicados diretamente no Shadow DOM do componente, garantindo que ele não afete o estilo global da aplicação. O botão tem animações e efeitos de profundidade aplicados ao passar o mouse e ao clicar.

#### Propriedades de Estilo:

##### Padding: Define o espaçamento interno.

##### Cores de fundo: Alteradas conforme o atributo variant.

##### Sombras: Efeito de profundidade para melhorar a percepção do botão.

##### Transições: Suavizam os efeitos de hover e clique.

##### Efeito de clique: O botão move-se levemente para baixo ao ser pressionado, criando uma sensação de profundidade.


#### Uso do Componente

``` <dt-button>Texto do Botão</dt-button> ```

##### Este botão exibirá o texto "Texto do Botão" com o estilo padrão.

#### Com Ícone

``` <dt-button icon="fas fa-trash">Excluir</dt-button> ```

##### Este botão exibirá o ícone de lixeira com o texto "Excluir". O estilo será ajustado conforme o texto.

#### Somente Ícone

``` <dt-button icon="fas fa-trash"></dt-button> ```

##### Este botão exibirá apenas o ícone, sem texto, e aplicará o estilo de botão reduzido com a classe icon-only.

#### Com Variações de Estilo

``` <dt-button variant="success">Confirmar</dt-button> ```
``` <dt-button variant="danger">Excluir</dt-button> ```
``` <dt-button variant="warning">Aviso</dt-button> ```

##### Esses botões terão cores diferentes para representar ações como confirmar, excluir e aviso.

### Funcionamento Interno

##### O componente DtButton herda de HTMLElement e utiliza Shadow DOM para encapsular seus estilos e estrutura interna. Ele verifica a presença de atributos como icon e variant para determinar o comportamento e a aparência do botão.

#### Lógica de Classes
##### Classe normal: A cor de fundo padrão do botão.
##### Classe success: Cor verde (para ações de confirmação).
##### Classe danger: Cor vermelha (para ações de exclusão).
##### Classe warning: Cor amarela (para ações de aviso).

##### Classe icon-only: Aplica-se automaticamente quando o botão contém apenas um ícone e sem texto, reduzindo o tamanho do botão.

#### Como o Shadow DOM é utilizado:

##### O CSS e o HTML do botão são injetados diretamente no Shadow DOM, o que significa que os estilos não afetam o restante da aplicação, garantindo encapsulamento completo.

#### CSS Customizável

##### Você pode personalizar facilmente o comportamento do botão alterando as variáveis CSS, como:

``` 
:root {
  --color-normal: #2563eb;
  --color-normal-hover: #1d4ed8;
  --color-success: #22c55e;
  --color-success-hover: #16a34a;
  --color-danger: #dc2626;
  --color-danger-hover: #b91c1c;
  --color-warning: #eab308;
  --color-warning-hover: #ca8a04;
  --radius-md: 4px;
  --font-family-base: 'Arial', sans-serif;
  --font-size-md: 1rem;
} 
``` 