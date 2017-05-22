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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TrainingApi);
  }
}(this, function(expect, TrainingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TrainingApi.InlineResponse2007();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2007', function() {
    it('should create an instance of InlineResponse2007', function() {
      // uncomment below and update the code to test InlineResponse2007
      //var instane = new TrainingApi.InlineResponse2007();
      //expect(instance).to.be.a(TrainingApi.InlineResponse2007);
    });

    it('should have the property perTagPerformance (base name: "PerTagPerformance")', function() {
      // uncomment below and update the code to test the property perTagPerformance
      //var instane = new TrainingApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property precision (base name: "Precision")', function() {
      // uncomment below and update the code to test the property precision
      //var instane = new TrainingApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property precisionStdDeviation (base name: "PrecisionStdDeviation")', function() {
      // uncomment below and update the code to test the property precisionStdDeviation
      //var instane = new TrainingApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property recall (base name: "Recall")', function() {
      // uncomment below and update the code to test the property recall
      //var instane = new TrainingApi.InlineResponse2007();
      //expect(instance).to.be();
    });

    it('should have the property recallStdDeviation (base name: "RecallStdDeviation")', function() {
      // uncomment below and update the code to test the property recallStdDeviation
      //var instane = new TrainingApi.InlineResponse2007();
      //expect(instance).to.be();
    });

  });

}));
