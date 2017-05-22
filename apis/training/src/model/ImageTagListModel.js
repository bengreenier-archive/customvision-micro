/**
 * TrainingApi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2008Tags'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2008Tags'));
  } else {
    // Browser globals (root is window)
    if (!root.TrainingApi) {
      root.TrainingApi = {};
    }
    root.TrainingApi.ImageTagListModel = factory(root.TrainingApi.ApiClient, root.TrainingApi.InlineResponse2008Tags);
  }
}(this, function(ApiClient, InlineResponse2008Tags) {
  'use strict';




  /**
   * The ImageTagListModel model module.
   * @module model/ImageTagListModel
   * @version 1.0
   */

  /**
   * Constructs a new <code>ImageTagListModel</code>.
   * @alias module:model/ImageTagListModel
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ImageTagListModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageTagListModel} obj Optional instance to populate.
   * @return {module:model/ImageTagListModel} The populated <code>ImageTagListModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Tags')) {
        obj['Tags'] = ApiClient.convertToType(data['Tags'], [InlineResponse2008Tags]);
      }
      if (data.hasOwnProperty('TotalTaggedImages')) {
        obj['TotalTaggedImages'] = ApiClient.convertToType(data['TotalTaggedImages'], 'Number');
      }
      if (data.hasOwnProperty('TotalUntaggedImages')) {
        obj['TotalUntaggedImages'] = ApiClient.convertToType(data['TotalUntaggedImages'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InlineResponse2008Tags>} Tags
   */
  exports.prototype['Tags'] = undefined;
  /**
   * @member {Number} TotalTaggedImages
   */
  exports.prototype['TotalTaggedImages'] = undefined;
  /**
   * @member {Number} TotalUntaggedImages
   */
  exports.prototype['TotalUntaggedImages'] = undefined;



  return exports;
}));

