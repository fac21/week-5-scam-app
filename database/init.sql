BEGIN;

DROP TABLE IF EXISTS users, recipes, ingredients, match_recipe_ingredients CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(20) NOT NULL
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(100) NOT NULL, 
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL
);

CREATE TABLE match_recipe_ingredients (
  recipe_id INTEGER REFERENCES recipes(id),
  ingredient_id INTEGER REFERENCES ingredients(id)
);

INSERT INTO users (name) VALUES
  ('Chisha'),
  ('Saki'),
  ('Amy'),
  ('Mariya')
;

INSERT INTO recipes (name, user_id) VALUES
  ('Carrot Cake', 1),
  ('Carrot and Ginger Soup', 2),
  ('Steak and Chips', 3),
  ('Carrot and Veggie Lasagne', 4)
;

INSERT INTO ingredients (name) VALUES
  ('Carrots'),
  ('Flour'),
  ('Egg'),
  ('Ginger'),
  ('Steak'),
  ('Potatoes'),
  ('Peppers'),
  ('Tomatoes'),
  ('Pasta')
;

INSERT INTO match_recipe_ingredients (recipe_id, ingredient_id) VALUES
  (1, 1),
  (1, 2)
;

COMMIT;