![PHP Revival Banner](https://raw.githubusercontent.com/php-revival/php-revival/refs/heads/master/src/art/php-revival-promo-big.png)

This is a landing page for the [PHP Revival](https://github.com/php-revival/php-revival) browser extension.

## Development
### NPM Commands
All the available NPM command you can find in [package.json](package.json) file.
#### Install Dependencies
```bash
npm i
```

#### Watch File Changes
```bash
npm run dev
```

Navigate to `http://localhost:3000` to see your documentation.

### With Container Engine
If you use a container engine like [🦦 Podman](https://podman.io/) or [🐳 Docker](https://app.docker.com/), here are the steps that you can make:

#### Build an Image
To build an image, navigate to the root of the project and run this Docker command:
```bash
docker compose build
```
For Podman, run this:
```bash
podman-compose build
```

#### Copy `node_modules` Locally
If you need to copy `node_modules` directory from the container to your local machine, run this command for Docker:
```bash
docker cp php-revival-landing:/app/node_modules .
```
For Podman, run this:
```bash
podman cp php-revival-landing:/app/node_modules .
```

> [!NOTE]
> `node_modules` is excluded from using volume in [docker-compose.yml](docker-compose.yml) file, that's why you need to copy it manually. It's done to prevent your local modules to be copied to Linux container, since it can create incompatibility issues between operating systems if you don't use Linux.

#### Run the Container
To run a container, navigate to the root of the project and run this Docker command:
```bash
docker compose up -d
```
For Podman, run this:
```bash
podman-compose up -d
```

You can visit `http://localhost:3000` to see your documentation.

#### Enter the Container
To enter inside of the container, run this Docker command:
```bash
docker compose exec app sh
```
For Podman, run this:
```bash
podman-compose exec app sh
```

You'll be able to run NPM commands inside of the container.

#### Remove the Container
To stop and remove the container, run this Docker command:
```bash
docker compose down
```
For Podman, run this:
```bash
podman-compose down
```
