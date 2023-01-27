migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dpraq037xvxb5oy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ouzdfsu",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vjuibcnc",
    "name": "discount",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fn8z1euz",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "maxSize": 9242880,
      "mimeTypes": [
        "image/png",
        "image/jpg",
        "image/webp",
        "image/jpeg"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dpraq037xvxb5oy")

  // remove
  collection.schema.removeField("3ouzdfsu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vjuibcnc",
    "name": "discount",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fn8z1euz",
    "name": "image",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "maxSize": 9242880,
      "mimeTypes": [
        "image/png",
        "image/jpg",
        "image/webp",
        "image/jpeg"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
