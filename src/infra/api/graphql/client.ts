interface GraphQLClientConfig {
  url: string;
  headers?: Record<string, string>;
}

class GraphQLClient {
  private url: string;
  private headers: Record<string, string>;

  constructor(config: GraphQLClientConfig) {
    this.url = config.url;
    this.headers = {
      "Content-Type": "application/json",
      ...config.headers,
    };
  }

  async query<T = unknown>(
    query: string,
    variables?: Record<string, unknown>
  ): Promise<T> {
    const response = await fetch(this.url, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    return data.data;
  }
}

export default GraphQLClient;
