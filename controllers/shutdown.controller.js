const shutdown = require('shutdown-computer');
// const shutdown = require('electron-shutdown-command');
exports.shutdown = async(req, res) => {
    shutdown.shutDownComputer();
    // shutdown.shutdown({
    //     force: true,
    //     debug: true,
    //     quitapp: false
    // });
    res.status(200).send({ "message": "BUZZZ OFF!!" });
}