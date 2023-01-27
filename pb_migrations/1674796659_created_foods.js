migrate((db) => {
  const collection = new Collection({
    "id": "dpraq037xvxb5oy",
    "created": "2023-01-27 05:17:39.783Z",
    "updated": "2023-01-27 05:17:39.783Z",
    "name": "foods",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i1obeli7",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mhrmo8zs",
        "name": "price",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
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
      },
      {
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dpraq037xvxb5oy");

  return dao.deleteCollection(collection);
})
