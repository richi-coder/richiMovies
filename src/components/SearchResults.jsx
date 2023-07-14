'use client'
import { loadingState } from '@/app/search/utils/loadingState';
import { ListResults } from './ListResults';
import ClientLoader from './ClientLoader';
import NotFound from '@/app/search/components/NotFound';

export default function SearchResults({ search }) {
  const { state, searchedProductions } = search;

  if (state === loadingState.FOUND) return  <ListResults searchedProductions={searchedProductions}  />
  if (state === loadingState.LOADING) return  <ClientLoader />
  if (state === loadingState.NOT_FOUND) return  <NotFound />
  if (state === loadingState.IDLING) return null

}
