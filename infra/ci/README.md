# CI/CD Configuration

This directory contains documentation for the CI/CD pipelines used in this project.

## GitHub Actions

GitHub requires workflow files to be located in `.github/workflows/`. The actual workflow files can be found at those locations:

- [CI Pipeline](../../.github/workflows/ci.yml) - Runs tests and builds the application
- [Deployment Pipeline](../../.github/workflows/deploy.yml) - Handles deployment to various environments

## Local Development with Docker

For local development using Docker:

```bash
# Start the application
[docker.sh](http://_vscodecontentref_/2) up

# View logs
[docker.sh](http://_vscodecontentref_/3) logs

# Stop the application
[docker.sh](http://_vscodecontentref_/4) down