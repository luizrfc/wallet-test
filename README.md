# Wallet Test

>Este é um projeto criado exclusivamente para teste de uma vaga em desenvolvimento mobile baseado em um layout em figma e contempla a construção de 3 telas: Home, Cadastro de Cartões e Apresentação dos Cartões.

## 1: Sobre o projeto

O projeto **Wallet Test** foi desenvolvido em React Native com TypeScript, utilizando as seguintes libs para construção:

- [React Native](https://reactnative.dev) Base principal do projeto
- [Styled Components](https://styled-components.com/): Para parte visual e utilização de propriedades dentro dos componentes
- [React Navigation](https://reactnavigation.org/docs/getting-started): Controla as rotas e chamadas entre as telas
- [Axios](https://axios-http.com/ptbr/) Para comunicação com a API
- [Card Validator](https://www.npmjs.com/package/card-validator) Para validação dos principais dados do cartão (número, cvv e expiração)
- [Mask Input](https://www.npmjs.com/package/react-native-mask-input) Utilizado para campos que necessitam de máscara
- [Hook Form](https://react-hook-form.com/) Controle dos inputs e validação dos dados
- [Yup](https://github.com/jquense/yup) Schema para validação dos dados em conjunto com o Hook Form
- [Reanimated](https://docs.swmansion.com/react-native-reanimated/) Lib para gereciamento das animações do projeto
- [SVG](https://www.npmjs.com/package/react-native-svg) Lib para carregar SVG/Imagens
- [Jest](https://jestjs.io/) Framework para testes Javascript/Typescript

## 2: Estrutura do projeto

- **android & ios**: Arquivos nativos gerados automaticamente pelo React Native
- **assets**: Armazena principalmente as fontes e imagens utilizadas no projeto, esta pasta é compartilhada entre as SO
- **src - Source**: Pasta principal do projeto onde ficam todos os arquivos - exceto os de configuração
**./assets**: Geralmente utilizado para arquivos estátivos utilzados pelo projeto como fonte, imagens e arquivos de mídia
**./components**:Armazena os componentes reutilizáveis que são usados em várias partes do projeto como botões, textos, inputs, loading...
**./context**: Gerencia os contextos globais para compartilhar os dados entre os componentes
**./mocks**: Diretório para arquivos de simulação de dados auxiliando no desenvolvimento ou em testes
**./models**: Contem os modelos de dados e/ou tipos personalizados
**./navigation**: Configuração da navegação do projeto
**./screens**: Telas/Containers - Responsável por agrupar os componentes gerando as diferentes telas do projeto
**./services**: Este diretório é responsável pela lógica de negórios ou serviços que fazem chamadas à API, gerenciamento de autenticação, etc
**./styles**: Armazena os arquivos de estilos globais, como temas ou estilos compartilhados;
**./utils**: Utilitários ou funções auxiliares que são usados em várias partes do aplicativo;
**./App.tsx**: Ponto de entrada principal do aplicativo, onde geralmente se configura a navegação, define telas iniciais, e faz outras chamadas iniciais necessárias para o funcionamento do aplicativo.

## 3: Um pouco mais do projeto

Ajustei algumas configurações no [Package.JSON](./package.json) para facilitar rodar alguns scripts:
*server:local* - Para iniciar o JSON-SERVER apontando para meu IP pois estava em conflito com localhost
*server* - Para rodar o JSON-SERVER sem qualquer alteração
*coverage* - Utilizo para atualizar as informações sobre a cobertura de testes do código
*android* - Script para rodar o projeto em Android
*ios* - Script para rodar o projeto em iOS
*start* - Script para rodar o Metro

O projeto já foi buildado e gerado um APK que está disponível [AQUI](./android/app/release/app-release.apk) para download.

## Obrigado! :tada:

Novamente, agradeço a oportunidade e espero que o teste esteja de acordo com a proposta da vaga.

Luiz Ricardo. :partying_face:
[LinkedIn](https://www.linkedin.com/in/luizricardofc)
