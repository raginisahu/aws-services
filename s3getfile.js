const AWS = require("aws-sdk");
// const bucket = process.env.Bucket;
const dom   = require('xmldom').DOMParser

async function getXMLFromPayload() {
    const pay = await getPayload()
    console.log('Converting payload string to XML DOM')
    return new dom().parseFromString(pay)
  }


  async function getPayload() {
    const s3 = new AWS.S3({
        accessKeyId: "",
        secretAccessKey: ""
    })
    const payload = await s3.getObject({
      Bucket: "payload",
      Key:   'http-gateway.xml',
    })
    .promise()

    return payload.Body.toString('utf-8')
}

 

getXMLFromPayload();

