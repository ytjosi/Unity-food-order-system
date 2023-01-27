migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0spb6z1v7xlus0c");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "0spb6z1v7xlus0c",
    "created": "2023-01-25 20:06:07.888Z",
    "updated": "2023-01-25 22:16:16.498Z",
    "name": "books",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "owpun27p",
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
        "id": "v3i6cbqq",
        "name": "author",
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
        "id": "cbxtgihi",
        "name": "published",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.role='Admin'",
    "updateRule": "@request.auth.role='Admin'",
    "deleteRule": "@request.auth.role='Admin'",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
