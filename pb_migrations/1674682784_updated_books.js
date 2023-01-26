migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0spb6z1v7xlus0c")

  collection.createRule = "@request.auth.role='Admin'"
  collection.updateRule = "@request.auth.role='Admin'"
  collection.deleteRule = "@request.auth.role='Admin'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0spb6z1v7xlus0c")

  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
