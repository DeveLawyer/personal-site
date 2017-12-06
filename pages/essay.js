import Error from 'next/error';

import compose from 'recompose/compose';
import setStatic from 'recompose/setStatic';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';

import Essay from '../layouts/essay.js';

import fetch from '../lib/fetch.js';

import withError from '../lib/with-error.js';
import withGA from '../lib/with-ga.js';
import withSW from '../lib/with-sw.js';

async function getInitialProps(ctx) {
  const query = `
    query getEssay($slug: String!) {
      getEssay(slug: $slug) {
        title
        slug
        content
        date
        description
      }
    }
  `;

  const variables = {
    slug: ctx.query.slug
  };

  const { data, errors } = await fetch({ query, variables });

  if (errors) {
    return { errors };
  }

  return { ...data.getEssay };
}

export default compose(
  setStatic('getInitialProps', getInitialProps),
  withError,
  withGA,
  withSW,
  branch(props => props.errors, renderComponent(Error), renderComponent(Essay))
)();