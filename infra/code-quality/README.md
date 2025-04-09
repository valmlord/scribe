# Code Quality Tools

This directory contains documentation and configuration for code quality tools used in the project.

## Code Climate

Code Climate is used for automated code reviews and quality metrics.

### Configuration

The main configuration file is located at [`.codeclimate.yml`](../../.codeclimate.yml) in the root of the project.

### Local Analysis

You can run Code Climate locally using Docker:

```bash
docker run \
  --interactive --tty --rm \
  --env CODECLIMATE_CODE="$PWD" \
  --volume "$PWD":/code \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume /tmp/cc:/tmp/cc \
  codeclimate/codeclimate analyze