---
title: Prometheus With K8S
date: 2020-04-13
author: Chan
---

本文用于记录搭建 Prometheus 监控 K8S 的资源和性能的过程。使用 `helm` 作为包安装器。

### 安装

此时我们默认 k8s 是安装好了，我们需要对 `helm` 安装。 安装的是 helm3。 通过下面的方式安装

```
curl https://baltocdn.com/helm/signing.asc | sudo apt-key add -
sudo apt-get install apt-transport-https --yes
echo "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt-get update
sudo apt-get install helm
```

在安装后，我们需要执行如下的命令来添加后面安装 `prometheus-operator`。这一步执行的原因是 helm 的 3 版本不会添加这些 repo 的地址，直解安装 prometheus-operator 会提示找不到这个地址。 

运行下面的命令添加源：

```
$ helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
$ helm repo add stable http://mirror.azure.cn/kubernetes/charts/  # 国内加速源 
$ helm repo update
```

