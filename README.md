# InfoFetch ![InfoFetch >= 1.0.0](https://img.shields.io/badge/InfoFetch-1.0.0-green?style=flat&logo=nodedotjs) ![Licencia](https://img.shields.io/badge/Licencia-CC%20BY--NC%204.0-blue)

🐧 **InfoFetch** es una herramienta de informacion del sistema inspirada en `neofetch`, desarrollada en Node.js. Muestra informacion detallada sobre el sistema operatico, hardaware y configuracion con una salida colorizada y ASCII art

## 🚀 Caracteristicas

- **Informacion del sistema completa:** OS, Kernel, uptime, CPU, memoria
- **Salida colorizada:** Utiliza colores pra mejorar la legibilidad
- **ASCII Art:** Incluye una visualizacion usando ASCII (A mejorar)
- **Multiplataforma:** Funciona en Linux, macOS y Windows
- **Ligero y rapido:** Sin dependencias externas, nolo Node.js nativo

## 📋 Requisitos

- **Requisitos minimos:** ![Node.js >= 20.10.0](https://img.shields.io/badge/NodeJs->=_20.10.0-green?style=flat&logo=nodedotjs)

- **Version recomendada:** ![Node.js >= 20.10.0](https://img.shields.io/badge/NodeJs-_>22.12.0-green?style=flat&logo=nodedotjs)

## 🛠 Instalacion

### **Clonar o descargar**

puede clonar el repositorio usando el siguiente comando:

```bash
git clone git@github.com:carlosandresalzate/infofetch-nodejs.git
```

### **Instalacion global (Recomendada)**

Para usar InfoFetch desde cualquier lugar del sistema puede:

- **Crear un directorio para el proyecto:**

```bash
mkdir infofetch
cd infofetch
```

- **Agrega el archivo `index.js` en el directorio**
- **Crea un archivo `package.js`:**

```json
{
  "name": "infofetch",
  "version": "1.0.0",
  "description": "Informacion del sistema InfoFetch",
  "main": "index.js",
  "bin": {
    "infofetch": "./index.js,"
  },
  "scripts": {
    "start": "node index.js"
  },
  "keywords": ["system", "info", "neofetch", "terminal"],
  "author": "Carlos Andres Alzate",
  "license": "MIT",
  "engines": {
    "node": ">= 20.10.0"
  }
}
```

Luego instalar global:

```bash
npm install -g
```

## 🎮 Uso

### Ejecucion directa

```bash
node index.js
```

### SI la instalacion es global

```bash
infofetch
```

### Desde NPM scripts

```bash
npm start
```

## 📊 Informacion mostrada

InfoFetch muestra la siguiente informacion:

|       Campo       |                     Descripcion                     |
| :---------------: | :-------------------------------------------------: |
| Usuario@Hostname  |         Usuario actual y nombre del equipo          |
|        OS         |     Sistema operativo completo con arquitectura     |
|      Kernel       |           Version del kernel del sistema            |
|      Uptime       |           Tiempo de actividad del sistema           |
|        CPU        |      Modelo del procesador y numero e nucleos       |
|      Memory       |       Uso de memoria (usando/total) en bytes        |
| Paleta de colores | Cuadrados de colores del schema actual del terminal |

## 🎨 Ejemplo de salida

```bash
================================================================================
|     INFORMACIÓN
|
|                             mi-laptop@jim
|   ,-~~-.___.             ------------------------------------
|  / |  '     \             OS: Linux 6.5.0 x64 linux
| (  )         0            Kernel: 6.5.0-28-generic
|  \_/-, ,----'             Uptime: 2 horas, 15 minutos
|     ====           //     CPU: Intel Core i7-8565U (8)cores
|    /  \-'~;    /~~~(O)    Memory: 8589934592 / 16777216000 Bytes
|   /  __/~|   /       |
| =(  _____| (_________|      ■ ■ ■ ■ ■ ■ ■ ■
================================================================================
```

## 🔧 Personalizacion

### Modificar colores

Los colores se pueden cambiar editando las variables de styleText en el codigo:

```javascript
const setOs = styleText("greenBright", `${version} ${machine} ${platform}`);
// cambiar a "greenBright" por: red, blue, yellow, cyan, magenta, etc.
```

### Añadir nueva informacion

para mostrar informacion adiccional, puedes usar cualquier metodo del modulo `os`:

```javascript
const newInfo = os.freemem(); // Ejemplo: memoria libre
const setNewInfo = styleText("cyanBright", `${newInfo}`);
```

## 🐛 Problemas conocidos

### Error: "Cannot find module"

- verifica que Node.js este instalado correctamente
- Asegurate de estar en el directorio correcto

### Error de permisos en (Linux/macOS)

```bash
chmod +x index.js
```

## 📑 Licencia

Este proyecto está licenciado bajo la [Creative Commons BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

© 2025 Carlos Andres Alzate

## 🤝Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar InfoFetch:

1. Crea un fork del proyecto
2. Crea una rama para tu feature
3. Hace un commit de tus cambios
4. Crea un pull request

---

Desarrollado con ❤ por **Carlos Andres Alzate**
