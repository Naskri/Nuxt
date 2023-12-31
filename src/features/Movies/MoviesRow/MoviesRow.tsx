import styled from './MoviesRow.module.css'
import { useTranslation } from 'react-i18next'
import { CustomSwipper } from '../../UI/Swipper/Swipper'
import { MovieSchemaType, MovieSupabaseType } from '../MoviesServices/MoviesSchema'

type MoviesRowProps = {
  title: string
  data: MovieSchemaType[] | MovieSupabaseType[] | undefined
  modifier?: string
  type: 'movie' | 'serie'
}

export const MoviesRow = ({ title, data, modifier, type }: MoviesRowProps) => {
  const { t } = useTranslation()

  return (
    <div className={styled['movies-row']}>
      <h2 className={styled.title}>{title}</h2>

      {data && data.length > 0 ? (
        <CustomSwipper slides={data} modifier={modifier} type={type} />
      ) : (
        <h3 className={styled.empty}>{t('validation.emptyList')}</h3>
      )}
    </div>
  )
}
