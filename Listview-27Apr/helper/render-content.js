import Ember from 'ember';

const {
  Helper,
  Logger
} = Ember;

export function renderContent(args) {
  let element = args[0];
  let html = "";
  let type = element.type;

  switch (type) {
    case "link":
      html = "<a href='#'>" + element.data + "</a>"
      break;
    case "html":
      html = element.data;
      break;
    case "text":
      html = "<p>" + element.data + "</p>"
      break;
    default:
      Logger.error('Invalid data type.');
  }
  return new Ember.Handlebars.SafeString(html);
}

export default Ember.Helper.helper(renderContent);
