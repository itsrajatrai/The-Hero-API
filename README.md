# Habuild_Problem01

Commands Used for Table Creation
<pre>
CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  name Varchar(90) NOT NULL
);

CREATE TABLE Ratings (
  id SERIAL PRIMARY KEY,
  topic_id INT NOT NULL,
  rank INT NOT NULL,
  CONSTRAINT fk_topic FOREIGN KEY(topic_id) REFERENCES topics(id)
)
</pre>

Commands Used for Data Insertion in Table Topics
<pre>
INSERT INTO topics (id,name) VALUES (1,'KGF2');
INSERT INTO topics (id,name) VALUES (2,'RRR');
INSERT INTO topics (id,name) VALUES (3,'The Kashmir Files');
INSERT INTO topics (id,name) VALUES (4,'Singham');
INSERT INTO topics (id,name) VALUES (5,'Harry Potter');
INSERT INTO topics (id,name) VALUES (6,'KGF');
INSERT INTO topics (id,name) VALUES (7,'Dr. Strange');
</pre>

Commands Used for Data Insertion in Ratings Table
<pre>
INSERT INTO Ratings (id,topic_id,rank) VALUES (1,1,88);
INSERT INTO Ratings (id,topic_id,rank) VALUES (2,2,80);
INSERT INTO Ratings (id,topic_id,rank) VALUES (3,3,95);
INSERT INTO Ratings (id,topic_id,rank) VALUES (4,4,75);
INSERT INTO Ratings (id,topic_id,rank) VALUES (5,5,90);
INSERT INTO Ratings (id,topic_id,rank) VALUES (6,6,80);
INSERT INTO Ratings (id,topic_id,rank) VALUES (7,7,92);
</pre>
