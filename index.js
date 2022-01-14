class Formatter {
  static capitalize(string) {
    return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
  }

  static sanitize(string) {
    const regex = /[^A-Za-z0-9\'\-\s]/g
    return string.replaceAll(regex, '')
  }

  static titleize(string) {
    const titleString = Formatter.capitalize(string);
    const words = titleString.split(' ');
    let outputString = ''
    for (let word of words) {
      switch (word) {
        case 'the':
          outputString = outputString.concat(' ', word);
          break;
        case 'a':
          outputString = outputString.concat(' ', word);
          break;
        case 'an':
          outputString = outputString.concat(' ', word);
          break;
        case 'but':
          outputString = outputString.concat(' ', word);
          break;
        case 'of':
          outputString = outputString.concat(' ', word);
          break;
        case 'and':
          outputString = outputString.concat(' ', word);
          break;
        case 'for':
          outputString = outputString.concat(' ', word);
          break;
        case 'at':
          outputString = outputString.concat(' ', word);
          break;
        case 'by':
          outputString = outputString.concat(' ', word);
          break;
        case 'from':
          outputString = outputString.concat(' ', word);
          break;
        default:
          outputString = outputString.concat(' ', Formatter.capitalize(word));
      }
    }
    return outputString.trimStart();
  }
}