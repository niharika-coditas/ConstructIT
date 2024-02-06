import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Custom React Hook for managing asynchronous operations with data, loading states and error handling.
 *
 * @param fn The asynchronous function to be executed.
 * @param extraParams Optional parameters for additional customization.
 * @returns An object containing state variables and functions for managing asynchronous operations.
 */

/**
 * Interface representing an error response with optional properties.
 *
 * @interface IErrorResponse
 * @property {number} [statusCode] - The HTTP status code associated with the error.
 * @property {string} [message] - A descriptive error message.
 * @property {string[]} [details] - Error messages details.
 */
export interface IErrorResponse {
  statusCode?: number;
  message?: string;
  details?: string[];
}

export default function useAsync<DataType, Args extends unknown[]>(
  fn: (...args: Args) => Promise<DataType>,
  extraParams?: {
    onSuccess?: (data?: DataType) => void;
    onError?: (error?: IErrorResponse) => void;
  }
) {
  // State variables
  const [data, setData] = useState<DataType | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [silentLoading, setSilentLoading] = useState<boolean>(false);
  const [error, setError] = useState<IErrorResponse | undefined>();
  const navigate = useNavigate();

  // Ref to store parameters for reloading
  const params = useRef<Args>();

  /**
   * Executes the asynchronous function.
   *
   * @param isSilent If true, performs a silent execution without clearing previous error and data.
   * @returns An asynchronous function that can be called with arguments for execution.
   */
  const execute =
    (isSilent = false) =>
    async (...args: Args) => {
      if (!isSilent) {
        setError(undefined);
        setData(undefined);
      }
      try {
        if (isSilent) {
          setSilentLoading(true);
        } else {
          setLoading(true);
        }

        params.current = args;
        const responseData = await fn(...args);
        setData(responseData);
        extraParams?.onSuccess?.(responseData);
      } catch (error) {
        if (error?.response?.status === 401) {
          // Handle unauthorized access
          localStorage.clear();
          sessionStorage.clear();
          navigate('/login');
          return;
        }
        if (error?.response?.status === 403) {
          // Handle forbidden access
          navigate('/unauthorized');
        }
        const errorResponse = error?.response?.data
          ? error?.response?.data
          : error;
        setError(errorResponse);
        extraParams?.onError?.(errorResponse);
      } finally {
        setLoading(false);
        setSilentLoading(false);
      }
    };

  /**
   * Reloads the data by re-executing the asynchronous function with the stored parameters.
   */
  const reload = () => {
    execute()(...params.current!);
  };

  /**
   * Performs a silent reload by re-executing the asynchronous function without clearing previous error and data.
   */
  const silentReload = () => {
    execute(true)(...params.current!);
  };

  // Return the state variables and functions for external use
  return {
    loading,
    silentLoading,
    data,
    error,
    execute: execute(),
    reload,
    silentReload
  };
}
