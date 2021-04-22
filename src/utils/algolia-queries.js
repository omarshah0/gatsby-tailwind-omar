const algoliasearch = require("algoliasearch")
const data = require("../dataset/data")

function indexAlgolia() {
  const client = algoliasearch("HFYUU1T7WZ", "62260895dc57c36b37cbf51234eec5c5")
  const index = client.initIndex("products")

  index
    .saveObjects(data, {
      autoGenerateObjectIDIfNotExist: true,
    })
    .then(({ objectIDs }) => {
      console.log(objectIDs)
    })
}

module.exports = indexAlgolia
