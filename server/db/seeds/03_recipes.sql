-- seeds/02_recipes.sql
-- Seed Rick
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (1, 1, 'pasta', 10, 1, 4, 'pasta');
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (2, 1, 'soup', 10, 1, 4, 'soup');

-- Seed Lisa
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (3, 2, 'salad', 10, 1, 4, 'salad');

-- Seed Vavo
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (
  4, 
  5, 
  'Vavo''s Chicken Soup', 
  35,
  1,
  10,
  'A hearty soup that''s spicy and salty in equal parts.'
);