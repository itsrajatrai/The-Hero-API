# Habuild_Problem01

Commands Used for Table Creation
<pre> CREATE TABLE Topics (
  id SERIAL PRIMARY KEY,
  name Varchar(90) NOT NULL
);

CREATE TABLE Ratings (
  id SERIAL PRIMARY KEY,
  topic_id INT NOT NULL,
  rank INT NOT NULL,
  CONSTRAINT fk_author FOREIGN KEY(topic_id) REFERENCES Topics(id)
)
</pre>
