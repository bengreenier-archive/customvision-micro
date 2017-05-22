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
    define(['ApiClient', 'model/ProjectsSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProjectsSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.TrainingApi) {
      root.TrainingApi = {};
    }
    root.TrainingApi.InlineResponse2005 = factory(root.TrainingApi.ApiClient, root.TrainingApi.ProjectsSettings);
  }
}(this, function(ApiClient, ProjectsSettings) {
  'use strict';




  /**
   * The InlineResponse2005 model module.
   * @module model/InlineResponse2005
   * @version 1.0
   */

  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * Represents a project
   * @alias module:model/InlineResponse2005
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2005} obj Optional instance to populate.
   * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('CurrentIterationId')) {
        obj['CurrentIterationId'] = ApiClient.convertToType(data['CurrentIterationId'], 'String');
      }
      if (data.hasOwnProperty('Created')) {
        obj['Created'] = ApiClient.convertToType(data['Created'], 'Date');
      }
      if (data.hasOwnProperty('LastModified')) {
        obj['LastModified'] = ApiClient.convertToType(data['LastModified'], 'Date');
      }
      if (data.hasOwnProperty('Settings')) {
        obj['Settings'] = ProjectsSettings.constructFromObject(data['Settings']);
      }
      if (data.hasOwnProperty('ThumbnailUri')) {
        obj['ThumbnailUri'] = ApiClient.convertToType(data['ThumbnailUri'], 'String');
      }
    }
    return obj;
  }

  /**
   * Gets the project id
   * @member {String} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * Gets or sets the name of the project
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * Gets or sets the description of the project
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * Gets the current iteration id
   * @member {String} CurrentIterationId
   */
  exports.prototype['CurrentIterationId'] = undefined;
  /**
   * Gets the date this project was created
   * @member {Date} Created
   */
  exports.prototype['Created'] = undefined;
  /**
   * Gets the date this project was last modifed
   * @member {Date} LastModified
   */
  exports.prototype['LastModified'] = undefined;
  /**
   * @member {module:model/ProjectsSettings} Settings
   */
  exports.prototype['Settings'] = undefined;
  /**
   * Gets the thumbnail url representing the image
   * @member {String} ThumbnailUri
   */
  exports.prototype['ThumbnailUri'] = undefined;



  return exports;
}));


