FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# Install pnpm via corepack as root during image build
RUN corepack enable && corepack prepare pnpm@latest --activate

ARG GIT_USER_EMAIL
ARG GIT_USER_NAME
RUN git config --global user.email "${GIT_USER_EMAIL}" && \
    git config --global user.name "${GIT_USER_NAME}"
