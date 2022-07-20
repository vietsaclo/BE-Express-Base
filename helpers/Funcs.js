const fs = require('fs');

class Funcs {
  static fun_makeFolderIfNotExists(path = './public/files') {
    if (!fs.existsSync(path))
      fs.mkdirSync(path);
  }

  static fun_makeTextAppendInFile(text) {
    let result = `============ ${new Date().toUTCString()} ============\n`;
    result += text + '\n';
    result += '=======================================================\n\n';
    return result;
  }

  static fun_appendTextInFile(textData, path) {
    Funcs.fun_makeFolderIfNotExists();
    fs.appendFileSync(path, textData);
  }

  static fun_readFileText(path = './public/files/api-listening.txt') {
    if (!fs.existsSync(path))
      return null;
    const result = fs.readFileSync(path).toString('utf-8');
    return result;
  }
}

module.exports = {
  Funcs,
}