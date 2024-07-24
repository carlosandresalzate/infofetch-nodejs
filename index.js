// Modulo OS
const os = require("node:os");
const { styleText } = require("node:util");

// const eol = os.EOL; // Documentación*
const availableParallelism = os.availableParallelism(); // numero de núcleos
const arch = os.arch();
const cpus = os.cpus();
const devNull = os.devNull; // documentación*
const endianness = os.endianness();
const freemem = os.freemem();
// const getPriority = os.getPriority();
const homedir = os.homedir();
const hostname = os.hostname();
const loadavg = os.loadavg(); // require mas conocimiento de uso para obtener un potencial
const machine = os.machine(); // return la arquitectura
const networkInterfaces = os.networkInterfaces();
const platform = os.platform();
const release = os.release(); // # del sistema operativo
// const setPriority = os.setPriority();
const tmpdir = os.tmpdir();
const totalmem = os.totalmem();
const type = os.type();
const uptime = os.uptime();
const userInfo = os.userInfo();
const version = os.version();
const constants = os.constants;

const tiempo = tiempoActivo(uptime);

// Colors: Cuadrados
const negro = styleText("black", "\u25A0");
const rojo = styleText("red", "\u25A0");
const verde = styleText("green", "\u25A0");
const amarillo = styleText("yellow", "\u25A0");
const azul = styleText("blue", "\u25A0");
const mangenta = styleText("magenta", "\u25A0");
const cyan = styleText("cyan", "\u25A0");
const white = styleText("white", "\u25A0");

// Colors: Texto
const informacion = styleText(
  ["black", "bgGreenBright", "bold"],
  " INFORMACIÓN "
);
const setOs = styleText("greenBright", `${version} ${machine} ${platform}`);
const setKernel = styleText("greenBright", `${release}`);
const setUptime = styleText("greenBright", `${showTiempoActivo()}`);
const setCPU = styleText(
  "greenBright",
  `${cpus[0].model} (${availableParallelism})cores`
);
const setMemory = styleText(
  "greenBright",
  `${totalmem - freemem} / ${totalmem} Bytes`
);
const at = styleText("greenBright", "@");
// const lineaHorizontal =

const colors = `${negro} ${rojo} ${verde} ${amarillo} ${azul} ${mangenta} ${cyan} ${white}`;

// functions

function addS(numero) {
  if (numero < 1 || numero > 1) {
    return "s";
  }
}

function showTiempoActivo() {
  return `${tiempo.hora} hora${addS(tiempo.hora)}, ${
    tiempo.minutos
  } minuto${addS(tiempo.minutos)}`;
}

function tiempoActivo() {
  const hora = Math.floor(uptime / 3600).toString();
  const minutos = Math.floor((uptime % 3600) / 60).toString();
  const segundos = (uptime % 60).toFixed(0);
  return { hora, minutos, segundos };
}

/* function memoriaTotal() {
  const gigabytes = Math.floor(totalmem / (1024 * 1024 * 1024));
  const megabytes = Math.floor(
    (totalmem % (1024 * 1024 * 1024)) / (1024 * 1024)
  );
  const bytesRestantes = totalmem % (1024 * 1024);
  return { gigabytes, megabytes, bytesRestantes };
} */

// Salida
const mostrarInformacion = `
================================================================================
|    ${informacion}
| 
|                             ${hostname}${at}${userInfo.username}
|   ,-~~-.___.             ------------------------------------
|  / |  '     \\             OS: ${setOs}
| (  )         0            Kernel: ${setKernel}
|  \\_/-, ,----'             Uptime: ${setUptime}
|     ====           //     CPU: ${setCPU}
|    /  \\-'~;    /~~~(O)    Memory: ${setMemory}
|   /  __/~|   /       |      
| =(  _____| (_________|      ${colors}
================================================================================
`;

console.log(mostrarInformacion);
