-- schema/02_create_recipess.sql
DROP TABLE IF EXISTS recipes CASCADE;
-- CREATE recipes
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  recipe VARCHAR(255),
  description TEXT
);