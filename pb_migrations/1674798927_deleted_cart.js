migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fivhxgb9zrv7p0q");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "fivhxgb9zrv7p0q",
    "created": "2023-01-27 05:19:08.599Z",
    "updated": "2023-01-27 05:54:14.434Z",
    "name": "cart",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nea6ipgm",
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
        "id": "l3j7tt6o",
        "name": "food",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "dpraq037xvxb5oy",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
