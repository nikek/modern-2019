import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export default function ServiceOverviewPage({ id }) {
  const { loading, error, data } = useQuery(gql`
    query {
      user(username: "${id}") {
        components {
          id
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <article>
      Hejsan
      <ul>
        {data.user.components.map(c => (
          <li key={c.id}>{c.id}</li>
        ))}
      </ul>
    </article>
  );
  return <div>Service Overview for {id}</div>;
}
