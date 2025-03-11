# Use a Node.js image como base
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos necessários
COPY package.json package-lock.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta do serviço (modifique conforme necessário)
EXPOSE 3001

# Comando para iniciar o serviço
CMD ["npm", "run", "start"]
