---
sidebar_position: 1
title: Prerequisites
description: Description of datafold-sdk
---
# datafold-sdk
```
In order to connect Datafold to your dbt Core project and submit dbt artifacts please follow the instruction and add datafold-sdk package to your dbt project code
```
### Prerequisites
- To use the Datafold sdk, you must first connect a [Data Source](integrations/data_warehouses/dw_overview.md) and connect a [GitHub](/integrations/git/github.md) or [GitLab](/integrations/git/gitlab.md) account.

### Installation
First, create your virtual environment for python:
```
> python3 -m venv venv
> source venv/bin/activate
> pip install --upgrade pip setuptools wheel
```
Now, you're ready to install the datafold SDK:
```
> pip install datafold-sdk
```
