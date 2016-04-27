import Ember from 'ember';

export default Ember.Controller.extend({
  paymentList: {
    "type": "basic/action",
    "pushTop": [
      0
    ],
    "data": [{
      "columnName": "Payment Ref",
      "header": {
        "type": "link",
        "text": "Display text",
        "classes": [],
        "transitionTo": "To route"
      },
      "content": {
        "type": "link",
        "data": "link Text",
        "classes": [],
        "transitionTo": "To route"
      }
    }, {
      "columnName": "Payment Type",
      "header": {
        "type": "text",
        "text": "Display text",
        "classes": []
      },
      "content": {
        "type": "html",
        "data": "<div>adas</div>",
        "classes": []
      }
    }, {
      "columnName": "Amount",
      "content": {
        "type": "text",
        "data": "text..",
        "classes": []
      }
    }]
  }
});
