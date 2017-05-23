const url = require('url')
const qs = require('querystring')
const { router, get, post, options } = require('microrouter')
const microCors = require('micro-cors')
const { buffer, send } = require('micro')
const apis = require('./apis')

// env config
const CV_PRED_KEY = process.env.CV_PRED_KEY
const CV_TRAIN_KEY = process.env.CV_TRAIN_KEY
const CV_PROJECT_ID = process.env.CV_PROJECT_ID
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*'
const ALLOWED_METHODS = (process.env.ALLOWED_METHODS ||
    'POST,GET,PUT,DELETE,OPTIONS').split(',')
const ALLOWED_HEADERS = (process.env.ALLOWED_HEADERS ||
    'X-Requested-With,Access-Control-Allow-Origin,X-HTTP-Method-Override,Content-Type,Authorization,Accept').split(',')

// instances
const corsHandler = microCors({ origin: ALLOWED_ORIGIN, allowHeaders: ALLOWED_HEADERS, allowMethods: ALLOWED_METHODS })
const trainingClient = new apis.training.DefaultApi()
const predictionClient = new apis.prediction.DefaultApi()

// microservice as a function (MaaF ??)
module.exports = corsHandler(router(
    get('/', (req, res) => {
        res.setHeader('Location', 'https://github.com/bengreenier/customvision-micro')
        res.statusCode = 301
        res.end()
    }),
    post('/predict', async (req, res) => {
        const body = await buffer(req)
        return await getPrediction(body)
    }),
    post('/train', async (req, res) => {
        const body = await buffer(req)
        const tag = qs.parse(url.parse(req.url).query)['tag']

        if (!tag) {
            throw new Error('missing tag querystring')
        }

        const sysTag = await getOrCreateTag(tag)
        return await createTrainingImage(sysTag.Id, body)
    })
))

/**
 * retrieves prediction information for a given image
 * @param {Blob} image the image data
 */
const getPrediction = (image) => {
    return new Promise((resolve, reject) => {
        predictionClient.predictImage(CV_PROJECT_ID, image, {
            predictionKey: CV_PRED_KEY
        }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

/**
 * creates a new training image with a given tag association
 * 
 * @param {String} tagId the unique id of a tag
 * @param {Blob} image the image data
 */
const createTrainingImage = (tagId, image) => {
    return new Promise((resolve, reject) => {
        trainingClient.createImagesFromData(CV_PROJECT_ID, image, {
            trainingKey: CV_TRAIN_KEY,
            tagIds: [tagId]
        }, (err, data) => {
            if (err) {
                treject(err)
            } else {
                resolve(data.Images[0])
            }
        })
    })
}

/**
 * finds a training tag with the passed human readable name if one exist
 * @param {String} tag the human readable tag name to find
 */
const getTrainingTag = (tag) => {
    return new Promise((resolve, reject) => {
        trainingClient.getTags(CV_PROJECT_ID, {
            trainingKey: CV_TRAIN_KEY
        }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                const matchedTag = data.Tags.find((v) => {
                    return v.Name == tag || v.Name.toLowerCase() == tag.toLowerCase()
                })
                if (matchedTag) {
                    resolve(matchedTag)
                } else {
                    reject(new Error('no matching tag'))
                }
            }
        })
    })
}

/**
 * creates a training tag with the passed human readable name
 * @param {String} tag the human readable tag name to create 
 */
const createTrainingTag = (tag) => {
    return new Promise((resolve, reject) => {
        return trainingClient.createTag(CV_PROJECT_ID, tag, {
            trainingKey: CV_TRAIN_KEY
        }, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

/**
 * get (if one exists) or create a training tag with the passed human readable name
 * @param {String} tag the human readqable tag name 
 */
const getOrCreateTag = (tag) => {
    return getTrainingTag(tag)
        .catch(() => {
            return createTrainingTag(tag)
        })
}