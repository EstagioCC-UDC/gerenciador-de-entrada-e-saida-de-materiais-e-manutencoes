FROM jbergknoff/postgresql-client

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

ENTRYPOINT []

CMD /wait && PGPASSWORD=postgres psql -h database-gesmm -p 5432 -U postgres -d gesmm -c \ 
  "CREATE SCHEMA IF NOT EXISTS keycloak"