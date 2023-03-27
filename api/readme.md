# Routes

- GET | /countries (Get All the countries)
- GET | /countries/name?="..." (Get country by name -- Example /countries/name?name=arge)
- GET | /countries/:id (Get country by ID -- Example: /countries/USA)
- POST | /activities (Create an Activity -- Example of Body
{
	"name": "Dormir",
  "difficulty": 1,
  "duration": 2,
  "season": "Fall",
	"countries": ["United States", "Argentina"]
})
- GET | /activities (Get all activities)

