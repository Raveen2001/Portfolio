This Portfolio website is entirely build using NextJs.

This app is deployed at https://raveen.in
## For Development

```
yarn install
yarn dev
```

This will start the dev server in port 3000

---

## For Production

1. Add cloud server docker to local docker CLI using docker context.

   1. start a ssh agend and add your ssh key for server

      ```
      eval `ssh agent`
      ssh-add [ssh key file location]
      ```

   2. Create docker context

      ```
      docker context create portfolio-DO --description "This is my docker client for Digital Ocean docker client" --docker "host=ssh://root@[server-ip]"
      ```

   3. Change the docker context to point to server
      ```
      docker context use portfolio-DO
      ```

2. Accure a SSL certificate for HTTPS.

   ```
   docker compose -f docker-compose.ssl.yml up --build
   ```

   Then bring down the container once we accure the token

3. Start your web containers.
   ```
   docker compose -f docker-compose.prod.yml up --build
   ```
4. For auto renewal of the SSL certificate.
   ```
   docker exec -it [nginx container id] bin/sh
   certbot renew --dry-run
   ```
