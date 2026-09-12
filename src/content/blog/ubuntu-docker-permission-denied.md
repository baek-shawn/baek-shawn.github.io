---
title: "Ubuntu에서 Docker permission denied 해결하기"
description: "docker 명령 실행 시 발생하는 /var/run/docker.sock permission denied 오류의 원인과 해결 방법을 정리합니다."
publishedAt: 2026-09-11
updatedAt: 2026-09-12
category: Development
tags:
  - Ubuntu
  - Docker
  - Linux
draft: false
---

Ubuntu에 Docker를 설치한 직후 `docker ps`를 실행하면 아래와 같은 오류가 자주 발생합니다.

## 증상

```text
permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock:
Head "http://%2Fvar%2Frun%2Fdocker.sock/_ping": dial unix /var/run/docker.sock: connect: permission denied
```

`sudo docker ps`는 정상 동작하지만, 일반 사용자로 실행하면 실패합니다.

## 원인

Docker CLI는 `/var/run/docker.sock` 소켓을 통해 Docker daemon과 통신합니다. 이 소켓의 권한을 확인하면 다음과 같습니다.

```bash
ls -l /var/run/docker.sock
```

```text
srw-rw---- 1 root docker 0 Sep 11 09:12 /var/run/docker.sock
```

소유자는 `root`, 그룹은 `docker`이고 권한은 `660`입니다. 즉 `docker` 그룹에 속하지 않은 사용자는 소켓에 접근할 수 없습니다.

## 해결

### 1. 현재 사용자를 docker 그룹에 추가

```bash
sudo usermod -aG docker $USER
```

`-a`(append) 옵션을 빼먹으면 기존 그룹에서 빠질 수 있으므로 반드시 `-aG`로 실행합니다.

### 2. 그룹 변경 적용

그룹 변경은 새 로그인 세션부터 적용됩니다. 로그아웃 후 다시 로그인하거나, 현재 셸에서만 바로 적용하려면 다음을 실행합니다.

```bash
newgrp docker
```

### 3. 확인

```bash
groups
docker run --rm hello-world
```

`groups` 출력에 `docker`가 포함되어 있고 `hello-world` 컨테이너가 정상 실행되면 해결된 것입니다.

## 하지 말아야 할 방법

검색하면 다음과 같은 방법도 나옵니다.

```bash
sudo chmod 666 /var/run/docker.sock
```

당장은 동작하지만 두 가지 문제가 있습니다.

| 방법 | 문제 |
|---|---|
| `chmod 666 /var/run/docker.sock` | 시스템의 모든 사용자가 Docker daemon을 제어할 수 있게 된다. 재부팅하면 권한이 초기화된다. |
| 항상 `sudo docker ...` | 동작은 하지만 매번 sudo를 입력해야 하고, 스크립트나 IDE 연동에서 불편하다. |

> `docker` 그룹에 속한 사용자는 컨테이너를 통해 사실상 root 권한을 얻을 수 있습니다. 개인 개발 환경에서는 문제되지 않지만, 공용 서버에서는 누구를 이 그룹에 넣을지 신중하게 결정해야 합니다.

## 정리

- 원인: `/var/run/docker.sock`은 `root:docker` 소유이고 권한이 `660`이다.
- 해결: `sudo usermod -aG docker $USER` 후 재로그인(또는 `newgrp docker`).
- `chmod 666`은 임시방편이며 보안상 권장하지 않는다.
