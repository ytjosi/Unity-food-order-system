migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.createRule = "verified=true"
  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": false,
    "allowUsernameAuth": false,
    "exceptEmailDomains": null,
    "manageRule": null,
    "minPasswordLength": 6,
    "onlyEmailDomains": null,
    "requireEmail": true
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.createRule = null
  collection.options = {
    "allowEmailAuth": true,
    "allowOAuth2Auth": false,
    "allowUsernameAuth": false,
    "exceptEmailDomains": null,
    "manageRule": "verified=true",
    "minPasswordLength": 6,
    "onlyEmailDomains": null,
    "requireEmail": true
  }

  return dao.saveCollection(collection)
})
