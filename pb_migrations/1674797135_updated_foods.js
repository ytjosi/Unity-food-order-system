migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dpraq037xvxb5oy")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "@request.auth.role='Admin'"
  collection.updateRule = "@request.auth.role='Admin'"
  collection.deleteRule = "@request.auth.role='Admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dpraq037xvxb5oy")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
