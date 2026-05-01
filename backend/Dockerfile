FROM node:20-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy prisma schema first to generate client
COPY prisma ./prisma/
RUN npx prisma generate

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Expose port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
