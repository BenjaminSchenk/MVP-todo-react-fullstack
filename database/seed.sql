DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
    id serial PRIMARY KEY,
    item text
);

INSERT INTO todos (item) VALUES
('Clean apartment'),
('Fix car'),
('Get a job')