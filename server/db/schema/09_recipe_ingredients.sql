DROP TABLE IF EXISTS recipe_ingredients CASCADE;
-- CREATE INGREDIENTS
CREATE TABLE recipe_ingredients (
  id SERIAL PRIMARY KEY, 
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
  ingredient_id INTEGER REFERENCES ingredients(id) ON DELETE CASCADE,
  quantity DECIMAL NOT NULL,
  measurement_id INTEGER REFERENCES measurements(id) NOT NULL
);