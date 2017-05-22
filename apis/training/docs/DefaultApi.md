# TrainingApi.DefaultApi

All URIs are relative to *https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Training/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createImagesFromData**](DefaultApi.md#createImagesFromData) | **POST** /projects/{projectId}/images/image | Adds the provided images to the current project iteration
[**createImagesFromPredictions**](DefaultApi.md#createImagesFromPredictions) | **POST** /projects/{projectId}/images/predictions | Adds the specified predicted images to the current project iteration
[**createImagesFromUrls**](DefaultApi.md#createImagesFromUrls) | **POST** /projects/{projectId}/images/url | Adds the provided images to the current project iteration
[**createProject**](DefaultApi.md#createProject) | **POST** /projects | Create a project
[**createTag**](DefaultApi.md#createTag) | **POST** /projects/{projectId}/tags | Creates a tag for the project
[**deleteImageLabel**](DefaultApi.md#deleteImageLabel) | **DELETE** /projects/{projectId}/images/{imageId}/label/{labelId} | Delete a image label
[**deleteImages**](DefaultApi.md#deleteImages) | **DELETE** /projects/{projectId}/images | Delete images from the current project iteration
[**deleteIteration**](DefaultApi.md#deleteIteration) | **DELETE** /projects/{projectId}/iterations/{iterationId} | Delete a specific iteration of a project
[**deletePrediction**](DefaultApi.md#deletePrediction) | **DELETE** /projects/{projectId}/predictions | 
[**deleteProject**](DefaultApi.md#deleteProject) | **DELETE** /projects/{projectId} | Delete a specific project
[**deleteTag**](DefaultApi.md#deleteTag) | **DELETE** /projects/{projectId}/tags/{tagId} | Delete a tag for the project
[**getAccountInfo**](DefaultApi.md#getAccountInfo) | **GET** /account | 
[**getAllTaggedImages**](DefaultApi.md#getAllTaggedImages) | **GET** /projects/{projectId}/images/tagged/all | Gets all tagged images for a given project iteration
[**getAllUntaggedImages**](DefaultApi.md#getAllUntaggedImages) | **GET** /projects/{projectId}/images/untagged | Gets all untagged images for a given project iteration
[**getDomain**](DefaultApi.md#getDomain) | **GET** /domains/{domainId} | Gets information about a specific domain
[**getDomains**](DefaultApi.md#getDomains) | **GET** /domains | Get a list of the avaiable domains
[**getImagesByTags**](DefaultApi.md#getImagesByTags) | **GET** /projects/{projectId}/images/tagged | Gets tagged images for a given project iteration
[**getIteration**](DefaultApi.md#getIteration) | **GET** /projects/{projectId}/iterations/{iterationId} | Get a specific iteration
[**getIterationPerformance**](DefaultApi.md#getIterationPerformance) | **GET** /projects/{projectId}/iterations/{iterationId}/performance | Get detailed performance information about an iteration
[**getIterations**](DefaultApi.md#getIterations) | **GET** /projects/{projectId}/iterations | Get iterations for the project
[**getNextPredictionResults**](DefaultApi.md#getNextPredictionResults) | **POST** /projects/{projectId}/predictions/next | 
[**getPredictionResults**](DefaultApi.md#getPredictionResults) | **GET** /projects/{projectId}/predictions | 
[**getProject**](DefaultApi.md#getProject) | **GET** /projects/{projectId} | Get a specific project
[**getProjects**](DefaultApi.md#getProjects) | **GET** /projects | Gets the user&#39;s projects
[**getTag**](DefaultApi.md#getTag) | **GET** /projects/{projectId}/tags/{tagId} | Gets information about a specific tag
[**getTags**](DefaultApi.md#getTags) | **GET** /projects/{projectId}/tags | Get&#39;s the project tags for a given project and iteration
[**postImageLabel**](DefaultApi.md#postImageLabel) | **POST** /projects/{projectId}/images/{imageId}/label | Post a label to a specific image
[**trainProject**](DefaultApi.md#trainProject) | **POST** /projects/{projectId}/train | Queues training of the current iteration for the project
[**updateIteration**](DefaultApi.md#updateIteration) | **PATCH** /projects/{projectId}/iterations/{iterationId} | Update a specific iteration
[**updateProject**](DefaultApi.md#updateProject) | **PATCH** /projects/{projectId} | Update a specific project
[**updateTag**](DefaultApi.md#updateTag) | **PATCH** /projects/{projectId}/tags/{tagId} | Updates a tag for the project


<a name="createImagesFromData"></a>
# **createImagesFromData**
> InlineResponse2003 createImagesFromData(projectId, imageData, opts)

Adds the provided images to the current project iteration

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The project id.

var imageData = "/path/to/file.txt"; // File | 

var opts = { 
  'tagIds': ["tagIds_example"] // [String] | The tags ids to associate with the image batch.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createImagesFromData(projectId, imageData, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project id. | 
 **imageData** | **File**|  | 
 **tagIds** | [**[String]**](String.md)| The tags ids to associate with the image batch. | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/octet-stream
 - **Accept**: application/json, text/json, , 

<a name="createImagesFromPredictions"></a>
# **createImagesFromPredictions**
> InlineResponse2003 createImagesFromPredictions(projectId, importBatch)

Adds the specified predicted images to the current project iteration

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The project id.

var importBatch = new TrainingApi.ImportBatch(); // ImportBatch | Image and tag ids


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createImagesFromPredictions(projectId, importBatch, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project id. | 
 **importBatch** | [**ImportBatch**](ImportBatch.md)| Image and tag ids | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, , , application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, , 

<a name="createImagesFromUrls"></a>
# **createImagesFromUrls**
> InlineResponse2003 createImagesFromUrls(projectId, createBatch)

Adds the provided images to the current project iteration

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The project id.

var createBatch = new TrainingApi.CreateBatch(); // CreateBatch | Image urls and tag ids


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createImagesFromUrls(projectId, createBatch, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project id. | 
 **createBatch** | [**CreateBatch**](CreateBatch.md)| Image urls and tag ids | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, , , application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, , 

<a name="createProject"></a>
# **createProject**
> InlineResponse2005 createProject(name, opts)

Create a project

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var name = "name_example"; // String | Name of the project to create

var opts = { 
  'description': "description_example", // String | The description of the of the project
  'domainId': "domainId_example" // String | The id of the domain to enable for this project
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProject(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the project to create | 
 **description** | **String**| The description of the of the project | [optional] 
 **domainId** | **String**| The id of the domain to enable for this project | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="createTag"></a>
# **createTag**
> InlineResponse2008Tags createTag(projectId, name, opts)

Creates a tag for the project

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | 

var name = "name_example"; // String | 

var opts = { 
  'description': "description_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTag(projectId, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **name** | **String**|  | 
 **description** | **String**|  | [optional] 

### Return type

[**InlineResponse2008Tags**](InlineResponse2008Tags.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="deleteImageLabel"></a>
# **deleteImageLabel**
> InlineResponse2002 deleteImageLabel(projectId, imageId, labelId)

Delete a image label

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | Guid of projectId

var imageId = "imageId_example"; // String | Guid of imageId

var labelId = "labelId_example"; // String | Guid of labelId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteImageLabel(projectId, imageId, labelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Guid of projectId | 
 **imageId** | **String**| Guid of imageId | 
 **labelId** | **String**| Guid of labelId | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="deleteImages"></a>
# **deleteImages**
> deleteImages(projectId, imageIds)

Delete images from the current project iteration

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | Guid of projectId

var imageIds = ["imageIds_example"]; // [String] | Ids of the images to be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteImages(projectId, imageIds, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Guid of projectId | 
 **imageIds** | [**[String]**](String.md)| Ids of the images to be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteIteration"></a>
# **deleteIteration**
> deleteIteration(projectId, iterationId)

Delete a specific iteration of a project

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | Guid of the projectId

var iterationId = "iterationId_example"; // String | Guid of the iterationId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteIteration(projectId, iterationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Guid of the projectId | 
 **iterationId** | **String**| Guid of the iterationId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deletePrediction"></a>
# **deletePrediction**
> deletePrediction(projectId, ids)



### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | 

var ids = ["ids_example"]; // [String] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePrediction(projectId, ids, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **ids** | [**[String]**](String.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteProject"></a>
# **deleteProject**
> deleteProject(projectId)

Delete a specific project

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | Guid of the projectId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProject(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Guid of the projectId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteTag"></a>
# **deleteTag**
> deleteTag(projectId, tagId)

Delete a tag for the project

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | 

var tagId = "tagId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTag(projectId, tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **tagId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAccountInfo"></a>
# **getAccountInfo**
> InlineResponse200 getAccountInfo()



### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getAllTaggedImages"></a>
# **getAllTaggedImages**
> [InlineResponse2002] getAllTaggedImages(projectId, opts)

Gets all tagged images for a given project iteration

This API supports batching and range selection. By default it will only return first 50 images matching images.  Use the {take} and {skip} parameters to control how many images to return in a given batch.  If the total number of images is less than ({skip} + {take})  the number of images returned will be less than {take}.

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The project id

var opts = { 
  'iterationId': "iterationId_example", // String | The iteration id. This will default to the current iteration
  'orderBy': "orderBy_example", // String | The ordering. Defaults to newest
  'take': 50, // Number | Maximum number of images to return. Defaults to 50
  'skip': 0 // Number | How many images should be skipped before begining the image batch. Defaults to 0
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllTaggedImages(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project id | 
 **iterationId** | **String**| The iteration id. This will default to the current iteration | [optional] 
 **orderBy** | **String**| The ordering. Defaults to newest | [optional] 
 **take** | **Number**| Maximum number of images to return. Defaults to 50 | [optional] [default to 50]
 **skip** | **Number**| How many images should be skipped before begining the image batch. Defaults to 0 | [optional] [default to 0]

### Return type

[**[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getAllUntaggedImages"></a>
# **getAllUntaggedImages**
> [InlineResponse2002] getAllUntaggedImages(projectId, opts)

Gets all untagged images for a given project iteration

This API supports batching and range selection. By default it will only return first 50 images matching images.  Use the {take} and {skip} parameters to control how many images to return in a given batch.  If the total number of images is less than ({skip} + {take})  the number of images returned will be less than {take}.

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The project id

var opts = { 
  'iterationId': "iterationId_example", // String | The iteration id. This will default to the current iteration
  'orderBy': "orderBy_example", // String | The ordering. Defaults to newest
  'take': 50, // Number | Maximum number of images to return. Defaults to 50
  'skip': 0 // Number | How many images should be skipped before begining the image batch. Defaults to 0
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllUntaggedImages(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project id | 
 **iterationId** | **String**| The iteration id. This will default to the current iteration | [optional] 
 **orderBy** | **String**| The ordering. Defaults to newest | [optional] 
 **take** | **Number**| Maximum number of images to return. Defaults to 50 | [optional] [default to 50]
 **skip** | **Number**| How many images should be skipped before begining the image batch. Defaults to 0 | [optional] [default to 0]

### Return type

[**[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getDomain"></a>
# **getDomain**
> InlineResponse2001 getDomain(domainId)

Gets information about a specific domain

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var domainId = "domainId_example"; // String | The id of the domain to get information about


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDomain(domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| The id of the domain to get information about | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getDomains"></a>
# **getDomains**
> [InlineResponse2001] getDomains()

Get a list of the avaiable domains

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDomains(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getImagesByTags"></a>
# **getImagesByTags**
> [InlineResponse2002] getImagesByTags(projectId, opts)

Gets tagged images for a given project iteration

This API supports batching and range selection. By default it will only return first 50 images matching images.  Use the {take} and {skip} parameters to control how many images to return in a given batch.  If the total number of images is less than ({skip} + {take})  the number of images returned will be less than {take}.

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The project id

var opts = { 
  'iterationId': "iterationId_example", // String | The iteration id. This will default to the current iteration
  'tagIds': ["tagIds_example"], // [String] | An required list of tags ids to filter the images. For example, if the provided tag ids are for the \"Dog\" and              \"Cat\" tags, then only images tagged with Dog OR Cat will be returned. Otherwise, all tagged images will be returned.
  'orderBy': "orderBy_example", // String | The ordering. Defaults to newest
  'take': 50, // Number | Maximum number of images to return. Defaults to 50
  'skip': 0 // Number | How many images should be skipped before begining the image batch. Defaults to 0
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getImagesByTags(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project id | 
 **iterationId** | **String**| The iteration id. This will default to the current iteration | [optional] 
 **tagIds** | [**[String]**](String.md)| An required list of tags ids to filter the images. For example, if the provided tag ids are for the \&quot;Dog\&quot; and              \&quot;Cat\&quot; tags, then only images tagged with Dog OR Cat will be returned. Otherwise, all tagged images will be returned. | [optional] 
 **orderBy** | **String**| The ordering. Defaults to newest | [optional] 
 **take** | **Number**| Maximum number of images to return. Defaults to 50 | [optional] [default to 50]
 **skip** | **Number**| How many images should be skipped before begining the image batch. Defaults to 0 | [optional] [default to 0]

### Return type

[**[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getIteration"></a>
# **getIteration**
> InlineResponse2006 getIteration(projectId, iterationId)

Get a specific iteration

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The id of the project the iteration belongs to

var iterationId = "iterationId_example"; // String | The id of the iteration to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIteration(projectId, iterationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The id of the project the iteration belongs to | 
 **iterationId** | **String**| The id of the iteration to get | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getIterationPerformance"></a>
# **getIterationPerformance**
> InlineResponse2007 getIterationPerformance(projectId, iterationId, threshold)

Get detailed performance information about an iteration

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The id of the project the iteration belongs to

var iterationId = "iterationId_example"; // String | The id of the iteration to get

var threshold = 3.4; // Number | The threshold threshold used to determine positive predictions


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIterationPerformance(projectId, iterationId, threshold, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The id of the project the iteration belongs to | 
 **iterationId** | **String**| The id of the iteration to get | 
 **threshold** | **Number**| The threshold threshold used to determine positive predictions | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getIterations"></a>
# **getIterations**
> [InlineResponse2006] getIterations(projectId)

Get iterations for the project

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The project id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIterations(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project id. | 

### Return type

[**[InlineResponse2006]**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getNextPredictionResults"></a>
# **getNextPredictionResults**
> InlineResponse2004 getNextPredictionResults(projectId, queryToken)



### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | 

var queryToken = new TrainingApi.QueryToken(); // QueryToken | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNextPredictionResults(projectId, queryToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **queryToken** | [**QueryToken**](QueryToken.md)|  | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, , , application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, , 

<a name="getPredictionResults"></a>
# **getPredictionResults**
> InlineResponse2004 getPredictionResults(projectId, maxCount, orderBy, opts)



### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | 

var maxCount = 56; // Number | 

var orderBy = "orderBy_example"; // String | 

var opts = { 
  'iterationId': "iterationId_example", // String | 
  'tagIds': ["tagIds_example"], // [String] | 
  'threshold': 3.4, // Number | 
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'endTime': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'source': "source_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPredictionResults(projectId, maxCount, orderBy, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **maxCount** | **Number**|  | 
 **orderBy** | **String**|  | 
 **iterationId** | **String**|  | [optional] 
 **tagIds** | [**[String]**](String.md)|  | [optional] 
 **threshold** | **Number**|  | [optional] 
 **startTime** | **Date**|  | [optional] 
 **endTime** | **Date**|  | [optional] 
 **source** | **String**|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getProject"></a>
# **getProject**
> InlineResponse2005 getProject(projectId)

Get a specific project

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The id of the project to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProject(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The id of the project to get | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getProjects"></a>
# **getProjects**
> [InlineResponse2005] getProjects()

Gets the user&#39;s projects

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProjects(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse2005]**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getTag"></a>
# **getTag**
> InlineResponse2008Tags getTag(projectId, tagId, opts)

Gets information about a specific tag

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The project this tag belongs to

var tagId = "tagId_example"; // String | The id of the tag

var opts = { 
  'iterationId': "iterationId_example" // String | The iteration to retrieve this tag from. Optional, defaults to the current iteration
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTag(projectId, tagId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project this tag belongs to | 
 **tagId** | **String**| The id of the tag | 
 **iterationId** | **String**| The iteration to retrieve this tag from. Optional, defaults to the current iteration | [optional] 

### Return type

[**InlineResponse2008Tags**](InlineResponse2008Tags.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="getTags"></a>
# **getTags**
> InlineResponse2008 getTags(projectId, opts)

Get&#39;s the project tags for a given project and iteration

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The project id

var opts = { 
  'iterationId': "iterationId_example" // String | The iteration id. This will default to the current iteration
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTags(projectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project id | 
 **iterationId** | **String**| The iteration id. This will default to the current iteration | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="postImageLabel"></a>
# **postImageLabel**
> InlineResponse2002 postImageLabel(projectId, imageId, tagId)

Post a label to a specific image

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | Guid of projectId

var imageId = "imageId_example"; // String | Guid of imageId

var tagId = "tagId_example"; // String | Guid of the tag to create this label for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postImageLabel(projectId, imageId, tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Guid of projectId | 
 **imageId** | **String**| Guid of imageId | 
 **tagId** | **String**| Guid of the tag to create this label for | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="trainProject"></a>
# **trainProject**
> InlineResponse2006 trainProject(projectId)

Queues training of the current iteration for the project

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The project id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.trainProject(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project id. | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, , 

<a name="updateIteration"></a>
# **updateIteration**
> InlineResponse2006 updateIteration(projectId, iterationId, updatedIteration)

Update a specific iteration

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | Guid of the projectId

var iterationId = "iterationId_example"; // String | Guid of the iteration

var updatedIteration = new TrainingApi.UpdatedIteration(); // UpdatedIteration | The updated iteration model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateIteration(projectId, iterationId, updatedIteration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Guid of the projectId | 
 **iterationId** | **String**| Guid of the iteration | 
 **updatedIteration** | [**UpdatedIteration**](UpdatedIteration.md)| The updated iteration model | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, , , application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, , 

<a name="updateProject"></a>
# **updateProject**
> InlineResponse2005 updateProject(projectId, updatedProject)

Update a specific project

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The id of the project to update

var updatedProject = new TrainingApi.UpdatedProject(); // UpdatedProject | The updated project model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProject(projectId, updatedProject, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The id of the project to update | 
 **updatedProject** | [**UpdatedProject**](UpdatedProject.md)| The updated project model | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, , , application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, , 

<a name="updateTag"></a>
# **updateTag**
> InlineResponse2008Tags updateTag(projectId, tagId, updatedTag)

Updates a tag for the project

### Example
```javascript
var TrainingApi = require('training_api');

var apiInstance = new TrainingApi.DefaultApi();

var projectId = "projectId_example"; // String | The project id this tag belongs to

var tagId = "tagId_example"; // String | The id of the tag to update

var updatedTag = new TrainingApi.UpdatedTag(); // UpdatedTag | The updated tag model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTag(projectId, tagId, updatedTag, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The project id this tag belongs to | 
 **tagId** | **String**| The id of the tag to update | 
 **updatedTag** | [**UpdatedTag**](UpdatedTag.md)| The updated tag model | 

### Return type

[**InlineResponse2008Tags**](InlineResponse2008Tags.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, , , application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, , 

