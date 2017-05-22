const url = require('url')
const qs = require('querystring')
const { router, get, post } = require('microrouter')
const { buffer, send } = require('micro')
const apis = require('./apis')

const CV_PRED_KEY = process.env.CV_PRED_KEY
const CV_TRAIN_KEY = process.env.CV_TRAIN_KEY
const CV_PROJECT_ID = process.env.CV_PROJECT_ID

console.log(CV_PRED_KEY, CV_TRAIN_KEY, CV_PROJECT_ID)

const trainingClient = new apis.training.DefaultApi()
const predictionClient = new apis.prediction.DefaultApi()

module.exports = router(
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
)

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

const getOrCreateTag = (tag) => {
    return getTrainingTag(tag)
        .catch(() => {
            return createTrainingTag(tag)
        })
}