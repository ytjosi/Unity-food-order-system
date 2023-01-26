migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0spb6z1v7xlus0c")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0spb6z1v7xlus0c")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
