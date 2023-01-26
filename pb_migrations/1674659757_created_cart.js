migrate((db) => {
  const collection = new Collection({
    "id": "v4o4zcqrs5dffw6",
    "created": "2023-01-25 15:15:57.845Z",
    "updated": "2023-01-25 15:15:57.845Z",
    "name": "cart",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wdgbmzdn",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "ypoxdybc",
        "name": "food",
        "type": "relation",
        "required": true,
        "unique": true,
        "options": {
          "maxSelect": null,
          "collectionId": "a75qvstn7omaw0x",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "x128ijvc",
        "name": "amount",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 50
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
  const collection = dao.findCollectionByNameOrId("v4o4zcqrs5dffw6");

  return dao.deleteCollection(collection);
})
