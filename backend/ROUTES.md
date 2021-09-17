### Routes

- [Home routes](#####home-routes)
  - [Trashcan type routes](#####trashcan-type)
  - [Region(judet) routes](<#####region(judet)>)
  - [City routes](#####city)
  - [Trashcan routes](#####trashcan)

##### HOME ROUTES

- GET /
  - should respond with a generic message in a json object
- GET /api/v1//
  - should respond with a generic message in a json object

##### TRASHCAN TYPE

- GET /api/v1/trashcanType/
  - responds with all the trashcan types in the system
- GET /api/v1/trashcanType/:id
  - responds with the trashcan type with the given id
- POST /api/v1/trashcanType/
  - body needs to be json
  - needs to be a valid trashcan_type object.
  - responds back with the created trashcan_type
- PUT /api/v1/trashcanType/:id
  - body needs to be json
  - needs to be a valid trashcan_type object.
  - update the trashcan with the given id
  - responds back with the updated trashcan_type
- DELETE /api/v1/trashcanType/:id
  - empty body
  - deletes the trashcan_type with the given id

##### REGION(JUDET)

- GET /api/v1/region/
  - responds with all the counties in the system
- GET /api/v1/region/:id
  - responds with the region with the given id

##### CITY

- GET /api/v1/city/
  - responds with all the cities in the system
- GET /api/v1/city/:id
  - responds with the city with the given id

##### TRASHCAN

- GET /api/v1/trashcan/
  - responds with all the trashcans in the system
- GET /api/v1/trashcan/:id
  - responds with the trashcan with the given id
- POST /api/v1/trashcan/
  - body needs to be json
  - needs to be a valid trashcan object.
  - responds back with the created trashcan
- PUT /api/v1/trashcan/:id
  - body needs to be json
  - needs to be a valid trashcan object.
  - update the trashcan with the given id
  - responds back with the updated trashcan
- DELETE /api/v1/trashcan/:id
  - empty body
  - deletes the trashcan with the given id
