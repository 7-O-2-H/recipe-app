-- seeds/02_recipes.sql
-- Seed Rick
INSERT INTO recipes (id, user_id, recipe, description) VALUES (1, 1, 'pasta', 'pasta');
INSERT INTO recipes (id, user_id, recipe, description) VALUES (2, 1, 'soup', 'soup');

-- Seed Lisa
INSERT INTO recipes (id, user_id, recipe, description) VALUES (3, 2, 'salad', 'salad');

-- Seed Vavo
INSERT INTO recipes (id, user_id, recipe, description) VALUES (
  4, 
  5, 
  'Vavo''s Chicken Soup', 
  'A hearty soup that''s spicy and salty in equal parts.'
);