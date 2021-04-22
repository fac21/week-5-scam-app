BEGIN;

DROP TABLE IF EXISTS users, recipes, ingredients, match_recipe_ingredients CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(20) NOT NULL,
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(100) NOT NULL, 
  user_id INTEGER REFERENCES users(id),
);

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL,
);

CREATE TABLE match_recipe_ingredients (
  recipe_id INTEGER REFERENCES recipes(id),
  ingredient_id INTEGER REFERENCES ingredients(id)
);

COMMIT;