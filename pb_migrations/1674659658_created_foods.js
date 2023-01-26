migrate((db) => {
  const collection = new Collection({
    "id": "a75qvstn7omaw0x",
    "created": "2023-01-25 15:14:18.030Z",
    "updated": "2023-01-25 15:14:18.030Z",
    "name": "foods",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sseyat4k",
        "name": "dish_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 5,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xrukmpqe",
        "name": "price",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "iskbbvlg",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 20,
          "max": 300,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tqro2zwk",
        "name": "image",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 4,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/png",
            "image/jpg",
            "image/webp"
          ],
          "thumbs": [
            "480x720"
          ]
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("a75qvstn7omaw0x");

  return dao.deleteCollection(collection);
})
