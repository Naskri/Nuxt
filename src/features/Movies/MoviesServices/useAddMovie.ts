import { useMutation, useQueryClient } from 'react-query'
import { addMovieToList } from './MoviesServices'
import { toast } from 'react-toastify'
import { MovieSupabaseType } from './MoviesSchema'

export const useAddMovie = () => {
  const queryClient = useQueryClient()

  const { mutate: addMovie, isLoading } = useMutation({
    mutationFn: (movie: MovieSupabaseType) => addMovieToList(movie),
    onSuccess: () => {
      toast.success('Movie was added to your list!')
      queryClient.invalidateQueries({ queryKey: ['movies'] })
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    },
  })

  return { addMovie, isLoading } as const
}
