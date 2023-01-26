migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4lh2m4398mz8qve");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4lh2m4398mz8qve",
    "created": "2023-01-25 17:06:45.487Z",
    "updated": "2023-01-25 17:06:45.487Z",
    "name": "rating_review",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dy2gyfw4",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "ogrfnc1o",
        "name": "food",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "a75qvstn7omaw0x",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "rmpi2vrg",
        "name": "rating",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 0.5,
          "max": 5
        }
      },
      {
        "system": false,
        "id": "tb18etp5",
        "name": "review",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 5,
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
})
