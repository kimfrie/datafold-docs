---
sidebar_position: 1
title: Prerequisites
description: Prerequisites to integrate Datafold with dbt Cloud
---
# Prerequisites

- To configure dbt Cloud, you must first connect a [Data Source](integrations/data_warehouses/dw_overview.md) and connect a [GitHub](/integrations/git/github.md) or [GitLab](/integrations/git/gitlab.md) account.
- You will need a dbt **Team** account or higher to access the dbt API Datafold.

## Connect your accounts using a token
- You will need either a [Service Token](https://docs.getdbt.com/docs/dbt-cloud-apis/service-tokens) or a [User Token](https://docs.getdbt.com/docs/dbt-cloud-apis/user-tokens):
    - **Service Token (Recommended):**
        - Navigate to **Account Settings -> Service Tokens -> + New Token** <br/><br/>
            ![](../../../../static/img/dbt_cloud_add_service_token.png) <br/><br/>

            - Add a Token Name
            - Add a Permission Set <br/><br/>
                ![](../../../../static/img/dbt_cloud_add_service_token_permission.png) <br/><br/>
                - Permission Set: Member
                - Project: All Projects, or check only the projects to use with Datafold
                - Save <br/><br/>
                ![](../../../../static/img/dbt_cloud_service_token.png) <br/><br/>
    - **User Token:**
        - Navigate to **Your Profile -> API Access**
            - Copy

## Set up dbt Cloud CI
In dbt Cloud, [set up dbt Cloud CI](https://docs.getdbt.com/docs/deploy/cloud-ci-job) so that your Pull Request job runs when you open or update a Pull Request.

dbt Cloud CI requires you to create at least two dbt Cloud jobs: a Production job and a Pull Request job. To integrate with Datafold, you may need to create additional jobs, which are described below.

## Create an Artifacts Job to provide Datafold with dbt Artifacts

We recommend creating a job in dbt Cloud that sends production artifacts (the `manifest.json` file) to Datafold on a regular basis. This is the easiest way to get started with Datafold.

<div style={{backgroundColor: '#e6f4ff', border: '1px solid #91caff', borderRadius: '8px', padding: '8px 12px'}}>
  Alternatively, you can set up continuous deployment by <a href="https://docs.datafold.com/guides/ci_guides/dbt_cloud#merge-trigger-production-job">creating a Merge Trigger Production Job</a> using a tool like GitHub Actions.
</div>

### Artifacts Job

An Artifacts Job is a dbt Cloud job that executes a `dbt compile` command on an hourly basis.

![](../../../../static/img/artifacts_job_1.png)
![](../../../../static/img/artifacts_job_2.png)

Select this job as the "Job that creates dbt artifacts" when setting up your dbt Cloud Integration.

![](../../../../static/img/job_that_creates_artifacts.png)
