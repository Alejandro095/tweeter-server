CREATE DATABASE tweeter TABLESPACE = space_cloud;

CREATE TABLE users (

    id SERIAL,

    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    
    website VARCHAR(50),
    birthday TIMESTAMP,
    bio VARCHAR(180),

    verify BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'utc'),

    CONSTRAINT pk_users PRIMARY KEY(id)
);

CREATE TABLE email_confirmation (

    id SERIAL,
    code VARCHAR(200),
    email VARCHAR(200),
    user_id INTEGER NOT NULL,

    CONSTRAINT pk_emailconfirmation_id PRIMARY KEY (id),
    CONSTRAINT fk_emailconfirmation_users FOREIGN KEY (user_id) REFERENCES users(id) 
                ON DELETE CASCADE
                ON UPDATE CASCADE
);

CREATE TABLE tweets (
    
    id SERIAL,

    user_id INTEGER NOT NULL,
    photo VARCHAR(100),
    content VARCHAR(200) NOT NULL,

    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'utc'),

    CONSTRAINT pk_tweets PRIMARY KEY (id),
    CONSTRAINT fk_tweets_user FOREIGN KEY (user_id) REFERENCES users(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
);

CREATE TABLE comments (

    tweet_id INTEGER NOT NULL,
    reply_id INTEGER NOT NULL,

    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'utc'),

    CONSTRAINT fk_comments_tweets_tweet FOREIGN KEY (tweet_id) REFERENCES tweets(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,
    
    CONSTRAINT fk_comments_tweets_reply FOREIGN KEY (reply_id) REFERENCES tweets(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE

);

CREATE TABLE likes (

    tweet_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'utc'),

    CONSTRAINT fk_likes_tweets FOREIGN KEY (tweet_id) REFERENCES tweets(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,

    CONSTRAINT fk_likes_user FOREIGN KEY (user_id) REFERENCES users(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
);

CREATE TABLE retweet (

    tweet_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'utc'),

    CONSTRAINT fk_likes_tweets FOREIGN KEY (tweet_id) REFERENCES tweets(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,

    CONSTRAINT fk_likes_user FOREIGN KEY (user_id) REFERENCES users(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
);

CREATE TABLE thread (

    id SERIAL,
    last_message INTEGER,

    user_one INTEGER NOT NULL,
    user_two INTEGER NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'utc'),

    CONSTRAINT pk_thread PRIMARY KEY (id),

    CONSTRAINT fk_thread_users_one FOREIGN KEY (user_one) REFERENCES users(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,

    CONSTRAINT fk_thread_users_two FOREIGN KEY (user_two) REFERENCES users(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
);

CREATE TABLE messages (

    id SERIAL,    

    thread INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    content VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT (now() AT TIME ZONE 'utc'),

    CONSTRAINT pk_messages PRIMARY KEY (id),

    CONSTRAINT fk_messages_thread FOREIGN KEY (thread) REFERENCES thread(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,

    CONSTRAINT fk_messages_user FOREIGN KEY (user_id) REFERENCES users(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
);  

CREATE TABLE sessions (
    id SERIAL,

    user_id INTEGER NOT NULL,
    uuid VARCHAR(200) NOT NULL UNIQUE,

    CONSTRAINT pk_sessions PRIMARY KEY (id),

    CONSTRAINT fk_sessions_users FOREIGN KEY (user_id) REFERENCES users(id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
);

INSERT INTO sessions (user_id, uuid) VALUES (2, '817142d4-571b-11eb-ae93-0242ac130002');