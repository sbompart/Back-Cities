# Back-cities

Api para ciudades hecho con NodeJS y una cache de Redis.

# Instalar Redis en linux
Pasos:

## Paso 1: Actualiza el sistema
```
sudo apt update && sudo apt upgrade -y
```

## Paso 2: Instala Redis
```
sudo apt install redis-server -y
```

## Paso 3: Verifica que Redis está corriendo
```
sudo systemctl status redis
```

## Paso 4 (opcional): Probar Redis desde consola
```
redis-cli
```

Dentro del cliente, escribe:
```
ping
```
# Instalar dependencias
```
npm install
```
## Validar vulnerabilidades
```
npm audit
```

## RUN service
```
node app.js
```

## CRUD funcional
- [CREATE:] TO BE
- [READ:] READY
- [UPDATE:] TO BE
- [DELETE:] TO BE