import { useEffect, useState } from 'react';

export const useFetch = (
  { defaultData = null, fetcher, stopRequest, immediately, onSuccess, onError },
  payload,
  triggers = [],
) => {
  const initialState = {
    loading: !!immediately,
    error: null,
    data: defaultData,
  };

  const [{ loading, error, data }, setState] = useState(initialState);

  const fetchData = () => {
    if (stopRequest) {
      return;
    }

    if (!loading) {
      setState(state => ({
        ...state,
        loading: true,
      }));
    }

    fetcher(payload)
      .then(response => {
        setState({
          loading: false,
          error: null,
          data: response,
        });

        if (onSuccess) {
          onSuccess(response);
        }
      })
      .catch(err => {
        setState(state => ({
          ...state,
          loading: false,
          error: err,
        }));

        if (onError) {
          onError(err);
        }
      });
  };

  useEffect(fetchData, [stopRequest, ...triggers]);

  return { loading, error, data, setState };
};
