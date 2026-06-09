# Usa uma imagem oficial do Node.js mais leve (versão LTS)
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de configuração de dependências primeiro
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código do seu projeto (pasta src, etc.)
COPY . .

# Expõe a porta que sua aplicação utiliza (ajuste se for diferente)
EXPOSE 3000

# Comando para iniciar a aplicação 
CMD ["npm", "start"]