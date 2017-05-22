# PredictionEndpoint.DefaultApi

All URIs are relative to *https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**predictImage**](DefaultApi.md#predictImage) | **POST** /{projectId}/image | Predict an image
[**predictImageUrl**](DefaultApi.md#predictImageUrl) | **POST** /{projectId}/url | Predict an image url


<a name="predictImage"></a>
# **predictImage**
> InlineResponse200 predictImage(projectId, imageData, opts)

Predict an image

### Example
```javascript
var PredictionEndpoint = require('prediction_endpoint');

var apiInstance = new PredictionEndpoint.DefaultApi();

var projectId = "projectId_example"; // String | The project to evaluate against

var imageData = "/path/to/file.txt"; // File | 

var opts = { 
  'iterationId': "iterationId_example", // String | Optional. Specifies the id of a particular iteration to evaluate against.              The default iteration for the project will be used when not specified.
  'application': "application_example" // String | Optional. Specifies the name of application using the endpoint.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.predictImage(projectId, imageData, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project to evaluate against | 
 **imageData** | **File**|  | 
 **iterationId** | **String**| Optional. Specifies the id of a particular iteration to evaluate against.              The default iteration for the project will be used when not specified. | [optional] 
 **application** | **String**| Optional. Specifies the name of application using the endpoint. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/octet-stream
 - **Accept**: application/json, text/json, , 

<a name="predictImageUrl"></a>
# **predictImageUrl**
> InlineResponse200 predictImageUrl(projectId, imageUrl, opts)

Predict an image url

### Example
```javascript
var PredictionEndpoint = require('prediction_endpoint');

var apiInstance = new PredictionEndpoint.DefaultApi();

var projectId = "projectId_example"; // String | The project to evaluate against

var imageUrl = new PredictionEndpoint.ImageUrl(); // ImageUrl | An {Microsoft.Cognitive.CustomVision.Models.ImageUrl} that contains the url of the image to be evaluated

var opts = { 
  'iterationId': "iterationId_example", // String | Optional. Specifies the id of a particular iteration to evaluate against.              The default iteration for the project will be used when not specified.
  'application': "application_example" // String | Optional. Specifies the name of application using the endpoint.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.predictImageUrl(projectId, imageUrl, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project to evaluate against | 
 **imageUrl** | [**ImageUrl**](ImageUrl.md)| An {Microsoft.Cognitive.CustomVision.Models.ImageUrl} that contains the url of the image to be evaluated | 
 **iterationId** | **String**| Optional. Specifies the id of a particular iteration to evaluate against.              The default iteration for the project will be used when not specified. | [optional] 
 **application** | **String**| Optional. Specifies the name of application using the endpoint. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, , , application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, , 

