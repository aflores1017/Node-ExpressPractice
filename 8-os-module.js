const os = require('os');

//info ab current user
const user = os.userInfo()

//method return syste, up time in secs
console.log(`The system is ${os.uptime()} secs`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs);