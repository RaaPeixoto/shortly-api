--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "userId" integer,
    "createdAt" timestamp without time zone DEFAULT now()
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, '2cd36d13-cb89-460d-9ed2-742ed7f4b4e7', 6, '2022-12-22 23:19:26.679969');
INSERT INTO public.sessions VALUES (2, 'bd54faa9-ad74-48f4-806f-bf0b3529b875', 1, '2022-12-22 23:20:59.833976');
INSERT INTO public.sessions VALUES (3, '73e5724d-0182-4b15-bea8-255b8e5beb30', 3, '2022-12-22 23:21:12.564088');
INSERT INTO public.sessions VALUES (4, 'ae0fdcaf-bc2b-409d-9917-7a19392e841c', 4, '2022-12-22 23:21:40.946546');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 'https://google.com', 'u1nLqNWcL', 0, 6, '2022-12-22 23:20:27.247019');
INSERT INTO public.urls VALUES (2, 'https://driven.com', '1yAlXLGhE', 0, 6, '2022-12-22 23:20:33.078397');
INSERT INTO public.urls VALUES (4, 'https://driven.com.br', 'MxTZi20kG', 0, 6, '2022-12-22 23:20:50.886252');
INSERT INTO public.urls VALUES (8, 'https://teste.teste.com', 'Psm-GdyOq', 5, 4, '2022-12-22 23:21:47.400001');
INSERT INTO public.urls VALUES (3, 'https://aliexpress.com', 'bjIZLsRz0', 2, 6, '2022-12-22 23:20:45.220737');
INSERT INTO public.urls VALUES (5, 'https://driven.com.br', 'yHQ8BbQDb', 8, 1, '2022-12-22 23:21:06.459889');
INSERT INTO public.urls VALUES (6, 'https://driven.com.br', '1MGGi3vVI', 2, 3, '2022-12-22 23:21:17.812663');
INSERT INTO public.urls VALUES (7, 'https://teste.teste.com', 'RLP0oQOU8', 1, 3, '2022-12-22 23:21:35.481921');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Raísa', 'raisa@driven.com.br', '$2b$10$VTwJcxUSO/Eep6NNyQvz.eOAt08jYCXwyMpzhoo/yqMT6UFLag30S', '2022-12-22 23:18:27.447488');
INSERT INTO public.users VALUES (2, 'teste', 'teste@driven.com.br', '$2b$10$iAp.ApOVattIVJOc3MsNye7zQuWelfq6e406ZUjRzaFeNvoavJ/Jq', '2022-12-22 23:18:39.461709');
INSERT INTO public.users VALUES (3, 'teste2', 'teste2@driven.com.br', '$2b$10$L5pVwEAH72h71a.8QLCiY.pkTboidgwFneGlicYsIzYPXbE04WsCS', '2022-12-22 23:18:44.054657');
INSERT INTO public.users VALUES (4, 'teste3', 'teste3@driven.com.br', '$2b$10$d3oMJC/Em20vai6Czw/o/eeQchvQHyW13CE9CEIz12ZnsikPtktDq', '2022-12-22 23:18:49.763372');
INSERT INTO public.users VALUES (5, 'teste4', 'teste4@driven.com.br', '$2b$10$xbhAU95KS2ndO6IsgujUqOggt3ZxzUlErqpP4QTpV4r8MWtSY0Xce', '2022-12-22 23:18:55.70194');
INSERT INTO public.users VALUES (6, 'teste5', 'teste5@driven.com.br', '$2b$10$lnZBAWwT7zFVw3DsYG3r6uOQMqBPKPrIkkBsOqiNyMppcQl7mCX7a', '2022-12-22 23:19:01.492434');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 4, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 8, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

