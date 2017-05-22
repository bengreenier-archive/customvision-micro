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
    define(['ApiClient', 'model/InlineResponse200QuotasProjects'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse200QuotasProjects'));
  } else {
    // Browser globals (root is window)
    if (!root.TrainingApi) {
      root.TrainingApi = {};
    }
    root.TrainingApi.PerProjectQuotaModel = factory(root.TrainingApi.ApiClient, root.TrainingApi.InlineResponse200QuotasProjects);
  }
}(this, function(ApiClient, InlineResponse200QuotasProjects) {
  'use strict';




  /**
   * The PerProjectQuotaModel model module.
   * @module model/PerProjectQuotaModel
   * @version 1.0
   */

  /**
   * Constructs a new <code>PerProjectQuotaModel</code>.
   * Represents a set of quotas for a given project
   * @alias module:model/PerProjectQuotaModel
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PerProjectQuotaModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PerProjectQuotaModel} obj Optional instance to populate.
   * @return {module:model/PerProjectQuotaModel} The populated <code>PerProjectQuotaModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ProjectId')) {
        obj['ProjectId'] = ApiClient.convertToType(data['ProjectId'], 'String');
      }
      if (data.hasOwnProperty('Iterations')) {
        obj['Iterations'] = InlineResponse200QuotasProjects.constructFromObject(data['Iterations']);
      }
      if (data.hasOwnProperty('Images')) {
        obj['Images'] = InlineResponse200QuotasProjects.constructFromObject(data['Images']);
      }
      if (data.hasOwnProperty('Tags')) {
        obj['Tags'] = InlineResponse200QuotasProjects.constructFromObject(data['Tags']);
      }
    }
    return obj;
  }

  /**
   * Gets the project id of the project this quota applies to
   * @member {String} ProjectId
   */
  exports.prototype['ProjectId'] = undefined;
  /**
   * @member {module:model/InlineResponse200QuotasProjects} Iterations
   */
  exports.prototype['Iterations'] = undefined;
  /**
   * @member {module:model/InlineResponse200QuotasProjects} Images
   */
  exports.prototype['Images'] = undefined;
  /**
   * @member {module:model/InlineResponse200QuotasProjects} Tags
   */
  exports.prototype['Tags'] = undefined;



  return exports;
}));


