---
sidebar_position: 1
id: open_source
title: Open Source
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

Add the following variables to **dbt_project.yml**:

  ```yaml
  #dbt_project.yml
  vars:
    data_diff:
      prod_database: PROD_DATABASE_NAME
      prod_schema: PROD_DEFAULT_SCHEMA_NAME # Optional: see dropdown below
      prod_custom_schema: PROD_<custom_schema> # Optional: see dropdown below
  ```
<details>
  <summary>Additional schema variable details</summary>
  The values for <code>prod_schema</code> and <code>prod_custom_schema</code> will vary based on how you have setup dbt.<br/><br/>

  <b>prod_schema</b><br/>
  This variable should be set to the default schema for the production target. It is used when a model does not have a custom schema.
  <br/>
  <br/>
  <b>prod_custom_schema</b><br/>
  This variable is used when a model has a custom schema. The &lt;custom_schema&gt; section is replaced with the custom schema for the model in order to support the various ways schema name generation can be overridden <a href="https://docs.getdbt.com/docs/build/custom-schemas">here</a>.
  <br/>
  <br/>
  If the production schemas look like <code>prod_marketing, prod_sales</code> for example, the variable should be set like so:
  <br/><code>prod_custom_schema: prod_&lt;custom_schema&gt;</code>
  <br/>
  <br/>
  If the production schemas look like <code>marketing, sales</code> for example, the variable would instead be:
  <br/><code>prod_custom_schema: &lt;custom_schema&gt;</code>
  <br/>
  <br/>
  <b>Examples</b><br/>
  <b>Single production schema:</b><br/>
  <code>
  vars:<br/>
    &nbsp;&nbsp;data_diff:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;prod_database: my_database<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;prod_schema: prod<br/>
  </code>
  <br/>
  <br/>
  <b>Prod schema names always match dev:</b><br/>
  <code>
  vars:<br/>
    &nbsp;&nbsp;data_diff:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;prod_database: my_database<br/>
  </code>
  <br/>
  <br/>
  <b>Some schemas are prefixed with "prod_", some use "prod" by default:</b><br/>
  <code>
  vars:<br/>
    &nbsp;&nbsp;data_diff:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;prod_database: my_database<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;prod_schema: prod<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;prod_custom_schema: prod_&lt;custom_schema&gt;<br/>
  </code>
  <br/>
  <br/>
  <b>Production schemas are never prefixed, but can land in the "analytics" schema by default</b><br/>
  <code>
  vars:<br/>
    &nbsp;&nbsp;data_diff:<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;prod_database: my_database<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;prod_schema: analytics<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;prod_custom_schema: &lt;custom_schema&gt;<br/>
  </code>
</details>

Then, identify primary keys in each model by adding tags, metadata, or uniqueness tests. [Check out this page](/guides/dbt_advanced_configs#tag-primary-keys) for more details on configuration.

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
  
