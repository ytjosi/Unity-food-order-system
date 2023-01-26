migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a75qvstn7omaw0x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "svkhb4fj",
    "name": "discount_price",
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
  const collection = dao.findCollectionByNameOrId("a75qvstn7omaw0x")

  // remove
  collection.schema.removeField("svkhb4fj")

  return dao.saveCollection(collection)
})
