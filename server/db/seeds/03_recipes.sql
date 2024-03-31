-- seeds/02_recipes.sql
-- seed Josh
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (
  1,
  1,
  'Chicken in Tomato Sauce', 
  25, 
  1, 
  4, 
  'A flavourful tomato-based chicken dish with fresh basil.'
);
-- seed Gary
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (
  2,
  1,
  'Zuppa Toscana',
  35,
  1,
  4,
  'A creamy and hearty Italian soup.'
);
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (3, 2, 'Cream of Mushroom Soup', 10, 1, 4, 'Like magic, it''s creamy without a lot of cream.');
-- seed Vavo
INSERT INTO recipes (id, user_id, recipe, time, measurement_id, serves, description) VALUES (
  4, 
  5, 
  'Vavo''s Chicken Soup', 
  35,
  1,
  10,
  'A hearty soup that''s spicy and salty in equal parts.'
);