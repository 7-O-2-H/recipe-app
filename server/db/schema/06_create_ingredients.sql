DROP TABLE IF EXISTS ingredients CASCADE;
-- CREATE INGREDIENTS
CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY, 
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
  ingredient VARCHAR(255) NOT NULL,
  quantity DECIMAL NOT NULL,
  measurement_id INTEGER REFERENCES measurements(id) NOT NULL
);
  -- favourite_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE