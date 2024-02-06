import { intersection, isEmpty } from 'lodash';
import { useAppSelector } from './reduxHooks';

/**
 * Factory function that returns a permission checking function based on the user's profile.
 *
 * @returns {(permissions: string[]) => boolean} A function that checks if the user has the required permissions.
 * @param {string[]} permissions - An array of permission strings to check against the user's profile.
 * @returns {boolean} Returns `true` if the user has the required permissions, otherwise `false`.
 */
export default (): ((permissions: string[]) => boolean) => {
  const userProfile = useAppSelector(state => state.user);

  /**
   * Function to check if the user has the required permissions.
   *
   * @param {string[]} permissions - An array of permission strings to check against the user's profile.
   * @returns {boolean} Returns `true` if the user has the required permissions, otherwise `false`.
   */
  const hasPermission = (permissions: string[]) => {
    if (isEmpty(userProfile.userId)) return true;

    return (
      isEmpty(permissions) || permissions?.indexOf(userProfile.role) !== -1
    );
  };

  return hasPermission;
};
