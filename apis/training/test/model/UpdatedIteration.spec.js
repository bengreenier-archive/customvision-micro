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
    instance = new TrainingApi.UpdatedIteration();
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

  describe('UpdatedIteration', function() {
    it('should create an instance of UpdatedIteration', function() {
      // uncomment below and update the code to test UpdatedIteration
      //var instane = new TrainingApi.UpdatedIteration();
      //expect(instance).to.be.a(TrainingApi.UpdatedIteration);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TrainingApi.UpdatedIteration();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TrainingApi.UpdatedIteration();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "Status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new TrainingApi.UpdatedIteration();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "Created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new TrainingApi.UpdatedIteration();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "LastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instane = new TrainingApi.UpdatedIteration();
      //expect(instance).to.be();
    });

    it('should have the property trainedAt (base name: "TrainedAt")', function() {
      // uncomment below and update the code to test the property trainedAt
      //var instane = new TrainingApi.UpdatedIteration();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "IsDefault")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instane = new TrainingApi.UpdatedIteration();
      //expect(instance).to.be();
    });

  });

}));
