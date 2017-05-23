# customvision-micro

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/bengreenier/customvision-micro)

A microservice (:microscope: :cloud:) capable of interacting with a [customvision.ai](https://customvision.ai) model.

## How

First, set `CV_PRED_KEY`, `CV_TRAIN_KEY`, and `CV_PROJECT_ID` to your custom vision prediction key, training key, and project id.
You can find these values by consulting your custom vision project settings page (and address bar for project id).

Here's an example on windows:

```
C:\Users\begreen\git
λ set CV_PROJECT_ID=a4b6e333-7a61-4ac7-99bb-3087cb7c0812

C:\Users\begreen\git
λ set CV_TRAIN_KEY=3af3ed83f56aaa024439a8b2fbd205d6

C:\Users\begreen\git
λ set CV_PRED_KEY=302f8aa4055a85ed2cb8b7feb22e64be
```

Then you simply need to install the dependencies and start the service:

```
C:\Users\begreen\git
λ npm install & npm start
npm WARN customvision-micro@0.1.0 No repository field.

> customvision-micro@0.1.0 start C:\Users\begreen\git
> micro

   ┌───────────────────────────────────────────────────┐
   │                                                   │
   │   Micro is running!                               │
   │                                                   │
   │   • Local:            http://localhost:3000       │
   │   • On Your Network:  http://10.162.46.216:3000   │
   │                                                   │
   │   Copied local address to clipboard!              │
   │                                                   │
   └───────────────────────────────────────────────────┘
```

## API

The public API space is pretty limited, but documented below.

### /predict

Simply post some binary image data:

```
POST /predict HTTP/1.1
Host: localhost:3000

<imageBinaryData>
```

=>

```
{
  "Id": "d7251d0a-0421-4878-8409-b59b9d97e12f",
  "Project": "a4b6e333-7a61-4ac7-99bb-3087cb7c0812",
  "Iteration": "fbabd6a0-c98a-4402-9cbf-70ec862e649a",
  "Created": "2017-05-22T20:55:41.374Z",
  "Predictions": [
    {
      "TagId": "d200fb90-de96-4c6e-addd-fe02ee9c8a44",
      "Tag": "hotdog",
      "Probability": 0.9999575
    },
    {
      "TagId": "9922688f-f96a-434d-8211-0e6050eed1d5",
      "Tag": "hamburger",
      "Probability": 0.00360502442
    },
    {
      "TagId": "4f92e597-6ba3-4d91-b834-13fd3e03d493",
      "Tag": "baguette",
      "Probability": 0.002024048
    },
    {
      "TagId": "3c5c6ede-f8fb-4341-989f-fd3729e3a850",
      "Tag": "cucumber",
      "Probability": 0.000312237855
    }
  ]
}
```

### /train

Include `tag` in the querystring (ie: `/train?tag=test123`) and simply post some binary image data:

```
POST /train?tag=test123 HTTP/1.1
Host: localhost:3000

<imageBinaryData>
```

=>

```
{
  "SourceUrl": "eb45b1a6e0734346af66200a3d3a779a",
  "Image": {
    "Id": "bed94c1b-5d3a-4786-8039-29114cac11f4",
    "Created": "2017-05-18T19:47:30.093Z",
    "Width": 300,
    "Height": 157,
    "ImageUri": "https://irisscuprodstore.blob.core.windows.net/i-a4b6e3337a614ac799bb3087cb7c0812/i-bed94c1b5d3a4786803929114cac11f4?sv=2016-05-31&sr=b&sig=RZmgT7YQdub82DvK0c1TOEaw%2FFKMrk0A5lM3txpEVSY%3D&se=2017-05-23T00%3A00%3A00Z&sp=r",
    "ThumbnailUri": "https://irisscuprodstore.blob.core.windows.net/i-a4b6e3337a614ac799bb3087cb7c0812/t-bed94c1b5d3a4786803929114cac11f4?sv=2016-05-31&sr=b&sig=LIXc2j1I%2Bt%2FPedoeQKvJKJRryzFZKaskk4CJZ6ghIks%3D&se=2017-05-23T00%3A00%3A00Z&sp=r",
    "Labels": [],
    "Predictions": []
  },
  "Status": "OKDuplicate"
}
```

## CORS

> If you aren't sure what CORS refers to, read [this](https://www.w3.org/TR/cors).

This service ships by default with very open CORS headers, which makes it easy to work with, but less secure.
If you'd like to lock things down, here's how:

1) set `ALLOWED_ORIGIN` to the origin you wish to grant access to. By default, this is `*`
2) set `ALLOWED_METHODS` to the comma separated methods you wish to allow. By default this is `POST,GET,PUT,DELETE,OPTIONS`
3) set `ALLOWED_HEADERS` to the comma separated headers you wish to allow. By default this is `X-Requested-With,Access-Control-Allow-Origin,X-HTTP-Method-Override,Content-Type,Authorization,Accept`
4) restart the service

For example:

```
C:\Users\begreen\git
λ set ALLOWED_ORIGIN=myorigin.com

C:\Users\begreen\git
λ set ALLOWED_METHODS=POST,GET

C:\Users\begreen\git
λ set ALLOWED_HEADERS=Content-Type,Authorization,Accept

C:\Users\begreen\git
λ npm start
```

## License

MIT