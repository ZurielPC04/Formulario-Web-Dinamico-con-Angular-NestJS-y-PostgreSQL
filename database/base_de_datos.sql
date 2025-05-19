--
-- PostgreSQL database dump
--

-- Dumped from database version 17rc1
-- Dumped by pg_dump version 17rc1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: datos_recabados_genero_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.datos_recabados_genero_enum AS ENUM (
    'masculino',
    'femenino',
    'otro'
);


ALTER TYPE public.datos_recabados_genero_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: datos_recabados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.datos_recabados (
    id integer NOT NULL,
    edad integer NOT NULL,
    comentario text NOT NULL,
    nombre character varying NOT NULL,
    ciudad character varying NOT NULL,
    genero public.datos_recabados_genero_enum NOT NULL,
    ocupacion character varying NOT NULL
);


ALTER TABLE public.datos_recabados OWNER TO postgres;

--
-- Name: datos_recabados_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.datos_recabados_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.datos_recabados_id_seq OWNER TO postgres;

--
-- Name: datos_recabados_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.datos_recabados_id_seq OWNED BY public.datos_recabados.id;


--
-- Name: datos_recabados id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datos_recabados ALTER COLUMN id SET DEFAULT nextval('public.datos_recabados_id_seq'::regclass);


--
-- Data for Name: datos_recabados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.datos_recabados (id, edad, comentario, nombre, ciudad, genero, ocupacion) FROM stdin;
1	22	TE Amo Mar	Palafox Leyte 	CDMX	masculino	Estudiante
2	24	LO ESTOY LOGRANDO MAMI, TE PROMETO HARE QUE TE SIENTAS ORGULLOSA TQM	Isai Zuriel Palafox Cuapio	Nezahualcoyotl	masculino	Desarrollador Web
3	30	TQM lore	Lorena Sheccid Garcia	La agricola oriental	femenino	Arquitecta
4	24	Miraaaaaa hice todo el front, el back y la API que los integra	Johan Abraham	Acapulco	femenino	Programador 
5	40	Mire yo hice todo el codigo de todo desde 0, el HTML, CSS, TypeScript y lo hice con Angular todo el FrontEnd y lo conecte con una Base de Datos con el BackEnd y todo la implementacion la hice desde 0 	Camilo Cuapio Zamora	Nezahualcoyotl	masculino	Tester
\.


--
-- Name: datos_recabados_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.datos_recabados_id_seq', 5, true);


--
-- Name: datos_recabados datos_recabados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.datos_recabados
    ADD CONSTRAINT datos_recabados_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

