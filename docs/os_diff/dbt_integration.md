---
title: dbt Integration
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Open-Source data-diff

Use Datafold Open Source during development see a summary of how code changes impact your data.

### Install data-diff

Navigate to your dbt project, and install data-diff and a database connector.

<Tabs
  defaultValue="snowflake"
  values={[
    {label: 'Snowflake', value: 'snowflake'},
    {label: 'BigQuery', value: 'bigquery'},
    {label: 'Redshift', value: 'redshift'},
    {label: 'PostgreSQL', value: 'postgres'},
    {label: 'Databricks', value: 'databricks'},
    {label: 'DuckDB', value: 'duckdb'},
  ]}>
  <TabItem value="snowflake">

  ```zsh
  pip install data-diff 'data-diff[snowflake]' -U
  ```

  </TabItem>
  <TabItem value="bigquery">

  ```zsh
  pip install data-diff google-cloud-bigquery -U
  ```
  <details>
    <summary>Additional BigQuery details</summary>
    Only dbt projects that use the <a href="https://docs.getdbt.com/reference/warehouse-setups/bigquery-setup#oauth-via-gcloud">OAuth via gcloud</a> connection method are currently supported.
    <br/> <br/>
    For example, run: <br/> <code>gcloud auth application-default login</code> <br/>
    <br/>
    Before running: <br/> <code>dbt run --select &lt;MODEL&gt; && data-diff --dbt</code> <br/>
  </details>

  </TabItem>
  <TabItem value="redshift">

  ```zsh
  pip install data-diff 'data-diff[redshift]' -U
  ```

  </TabItem>
  <TabItem value="postgres">

  ```zsh
  pip install data-diff 'data-diff[postgres]' -U
  ```

  </TabItem>
  <TabItem value="databricks">

  ```zsh
  pip install data-diff 'data-diff[databricks]' -U
  ```

  </TabItem>
  <TabItem value="duckdb">

  ```zsh
  pip install data-diff 'data-diff[duckdb]' -U
  ```

  </TabItem>
</Tabs>

### Configure your dbt Project

Add the following variables to **dbt_project.yml** and tag the primary keys for each model in **schema.yml**. 

  ```yaml
  #dbt_project.yml
  vars:
    data_diff:
      prod_database: <PROD_DATABASE_NAME>
      prod_schema: <PROD_SCHEMA_NAME> # optional (see below)
      custom_schemas: <True/False> # optional (see below)
  ``` 
  
  <details>
    <summary>Optional arguments</summary>
    <b>Schema Environments:</b> <br/>
    If you utilize schema environments, including <a href="https://docs.getdbt.com/docs/build/custom-schemas">custom schemas</a> (default dbt behavior), set the vars like the example below:
    <br/> <code>
    vars:<br/>
    &nbsp;&nbsp;data_diff:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;prod_database: PROD_DATABASE_NAME<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;prod_schema: PROD_SCHEMA_NAME
    </code>
    Then the path to the prod model will rendered in one of two ways per model.<br/><br/>
    When the model has a custom schema:<br/>
    <b><i>&nbsp;&nbsp;&lt;prod_database&gt;.&lt;prod_schema&gt;_&lt;custom_schema&gt;.&lt;model&gt;</i></b><br/>
    Otherwise:<br/>
    <b><i>&nbsp;&nbsp;&lt;prod_database&gt;.&lt;prod_schema&gt;.&lt;model&gt;</i></b><br/><br/>
    You can add <b><i>custom_schemas: False</i></b> to force the path to use <b><i>&lt;prod_schema&gt;</i></b> every time, but this is an unlikely scenario.
    <br/>
    <br/>
    <b>Database Environments:</b> <br/>
    If you have modified the default dbt behavior in order to use databases as environments (prod_db, pr_db, dev_db), and each of those dbs have the same schemas, set the vars like the example below:
    <br/> <code>
    vars:<br/>
    &nbsp;&nbsp;data_diff:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;prod_database: PROD_DATABASE_NAME<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;custom_schemas: False
    </code>
    Then the path to the prod model will always be:<br/>
    <b><i>&nbsp;&nbsp;&lt;prod_database&gt;.&lt;same_schema_as_dev_model&gt;.&lt;model&gt;</i></b><br/>
  </details>

  ```yaml
  #schema.yaml
  models:
    - name: <MODEL_NAME>
      columns:
        - name: <COLUMN_NAME>
          tags:
            - primary-key
  ```
  To learn more about setting primary key tags, check out [this section](/integrations/orchestration/dbt_adv_config#primary-keys).

### Run with --dbt

Run your dbt model with `data-diff --dbt` to see the impact that your model change had on the data.
    
  ```bash
  # as one command
  dbt run --select <MODEL> && data-diff --dbt
  ```
  ```bash
  # or as separate commands
  dbt run --select <MODEL>
  data-diff --dbt
  ```

<br />

---


## Datafold Cloud

Want to see even more? **Datafold Cloud** gives you insight into value-level changes.

### Create an Account

:::info
Datafold Cloud is currently in private beta. [Let us know](mailto:support@datafold.com?subject=Interested%20in%20Cloud%20Beta) if you are interested in participating.

Set up Datafold's [open-source data-diff](/os_diff/dbt_integration#open-source-data-diff) before configuring the cloud integration below.
:::

<!-- Create a [Datafold account](https://app.datafold.com/org-signup). -->

### Configure a Data Source

To configure a Data Source, navigate to **Settings** &rarr; **Integrations** &rarr; **Data warehouses** and click **Add new integration** and follow the prompts. For more information, check out our [Data Source configuration guides](/integrations/data_warehouses/dw_overview).

After you **Test and Save**, add the Data Source ID (which can be found on the Data warehouses page) to your **dbt_project.yml**.
    
  ```yaml
  # dbt_project.yml
  vars:
    data_diff:
        ...
        datasource_id: <DATA_SOURCE_ID>
  ```

### Generate an API Key

To generate a personal API key, navigate to **Settings** &rarr; **Account** and click **Create API Key**. 

Copy and export your API Key as an environment variable. We suggest storing it in a file like `.zshrc` or `.bash_profile`, but you can also run the command below directly in your project.

  ```bash
  export DATAFOLD_API_KEY=XXXXXXXXX
  ``` 

:::info
On-prem customers should set an environment variable specifying the URL you use to access Datafold.

  ```bash
  export DATAFOLD_HOST=https://datafold.domain.tld
  ``` 
:::

### Run with --cloud

Run your dbt model with `--cloud` to see the impact that your model change had on the data.
    
  ```bash
  # as one command
  dbt run --select <MODEL> && data-diff --dbt --cloud
  ```
  ```bash
  # or as separate commands
  dbt run --select <MODEL>
  data-diff --dbt --cloud
  ```