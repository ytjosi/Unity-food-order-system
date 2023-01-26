migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0spb6z1v7xlus0c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bcq0gqgo",
    "name": "shelf",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6cpefser",
    "name": "quantity",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0spb6z1v7xlus0c")

  // remove
  collection.schema.removeField("bcq0gqgo")

  // remove
  collection.schema.removeField("6cpefser")

  return dao.saveCollection(collection)
})
