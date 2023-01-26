migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a75qvstn7omaw0x")

  // remove
  collection.schema.removeField("o6tqtp2j")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a75qvstn7omaw0x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o6tqtp2j",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
