import { MoviesRow } from './MoviesRow/MoviesRow'
import { TV_SERIES_API } from './MoviesServices/TVSeriesAPI'
import { useMovies } from './MoviesServices/useMovies'
import { useTranslation } from 'react-i18next'

export const TVSeries = () => {
  const { data: popular } = useMovies(TV_SERIES_API.POPULAR_SERIES)
  const { data: action } = useMovies(TV_SERIES_API.ACTION_SERIES)
  const { data: top } = useMovies(TV_SERIES_API.TOP_RATED)
  const { data: mystery } = useMovies(TV_SERIES_API.MYSTERY_SERIES)
  const { data: kids } = useMovies(TV_SERIES_API.KIDS_SERIES)
  const { data: comedies } = useMovies(TV_SERIES_API.COMEDY_SERIES)

  const { t } = useTranslation()

  return (
    <>
      <MoviesRow title={t('series.popular')} data={popular?.results} type="serie" />
      <MoviesRow title={t('series.action')} data={action?.results} type="serie" />
      <MoviesRow title={t('series.top')} data={top?.results} modifier="bigger" type="serie" />
      <MoviesRow title={t('series.comedies')} data={comedies?.results} type="serie" />
      <MoviesRow title={t('series.kids')} data={kids?.results} type="serie" />
      <MoviesRow title={t('series.mystery')} data={mystery?.results} type="serie" />
    </>
  )
}
