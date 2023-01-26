migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gbc8q3qxcqjcbck");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "gbc8q3qxcqjcbck",
    "created": "2023-01-25 15:18:26.976Z",
    "updated": "2023-01-25 15:18:26.976Z",
    "name": "orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dvjbkgry",
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
        "id": "f0x3tkgo",
        "name": "food",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "a75qvstn7omaw0x",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "fnbapljn",
        "name": "order_id",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1000000,
          "max": 9999999
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
})
