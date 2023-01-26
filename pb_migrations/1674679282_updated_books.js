migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0spb6z1v7xlus0c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g3ozmop0",
    "name": "cover",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 8242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0spb6z1v7xlus0c")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g3ozmop0",
    "name": "cover",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpg",
        "image/webp"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
