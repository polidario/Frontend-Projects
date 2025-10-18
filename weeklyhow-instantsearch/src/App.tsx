import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  Configure,
  DynamicWidgets,
  RefinementList,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  SearchBox,
} from 'react-instantsearch';

import { Panel } from './Panel';

import type { Hit } from 'instantsearch.js';

import './App.css';

const ALGOLIA_CREDS = {
  APP_ID: process.env.REACT_APP_ALGOLIA_APP_ID,
  API_KEY: process.env.REACT_APP_ALGOLIA_API_KEY
}

const searchClient = algoliasearch(
  ALGOLIA_CREDS.APP_ID,
  ALGOLIA_CREDS.API_KEY
);

const future = { preserveSharedStateOnUnmount: true };

export function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">weeklyhow-instantsearch</a>
        </h1>
        <p className="header-subtitle">
          using{' '}
          <a href="https://github.com/algolia/instantsearch/tree/master/packages/react-instantsearch">
            React InstantSearch
          </a>
        </p>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="weeklyhow_videos" future={future} insights>
          <Configure hitsPerPage={3} />
          <div className="search-panel">
            <div className="search-panel__filters">
              <DynamicWidgets fallbackComponent={RefinementList}>
              </DynamicWidgets>
            </div>

            <div className="search-panel__results">
              <SearchBox placeholder="" className="searchbox" />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

type HitProps = {
  hit: Hit;
};

function Hit({ hit }: HitProps) {
  return (
    <article>
      <img src={ hit.thumbnail_url } alt={ hit.title } />
      <div>
        <h1>
          <Highlight attribute="title" hit={hit} />
        </h1>
        <p>
          <Highlight attribute="description" hit={hit} />
        </p>
      </div>
    </article>
  );
}
