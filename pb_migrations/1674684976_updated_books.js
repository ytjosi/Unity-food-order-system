migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0spb6z1v7xlus0c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ledy0sgb",
    "name": "description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 150,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0spb6z1v7xlus0c")

  // remove
  collection.schema.removeField("ledy0sgb")

  return dao.saveCollection(collection)
})
