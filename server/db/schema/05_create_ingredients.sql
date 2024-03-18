DROP TABLE IF EXISTS ingredients CASCADE;
-- CREATE INGREDIENTS
CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY, 
  recipe_buffer_id INTEGER REFERENCES recipe_buffer(id) ON DELETE CASCADE,
  ingredient VARCHAR(255) NOT NULL,
  quantity DECIMAL NOT NULL,
  measurement VARCHAR(25) NOT NULL
);
  -- favourite_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE